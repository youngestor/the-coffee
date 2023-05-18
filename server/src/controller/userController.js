const { userModel } = require('../model')
const bcrypt = require('bcryptjs')

const userController = {
    handleRead: (req, res, next) => {
        userModel.find()
            .then(user => res.status(200).json({
                user
            }))
            .catch(next)
    },

    handleCreate: (req, res, next) => {
        const fullname = req.body.fullname
        const username = req.body.username
        const password = req.body.password

        if (!fullname || !username || !password)
            return res.status(500).json({
                errCode: 1,
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        userModel.findOne({ username })
            .then(user => {
                if (user)
                    return res.status(500).json({
                        errMessage: 'Tên tài khoản đã tồn tại.'
                    })

                const passwordHash = bcrypt.hashSync(password, 8)
                const newUser = new userModel({
                    fullname,
                    username,
                    password: passwordHash,
                })

                newUser.save()
                    .then(user => {
                        const userInfo = user.toObject()
                        delete userInfo.password
                        return res.status(200).json({
                            user: userInfo
                        })
                    })
                    .catch(next)
            })
            .catch(next)
    },

    handleLogin: (req, res, next) => {
        const username = req.body.username
        const password = req.body.password

        if (!username || !password)
            return res.status(500).json({
                errCode: 1,
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        userModel.findOne({ username })
            .then(user => {
                if (!user)
                    return res.status(500).json({
                        errMessage: 'Tên tài khoản không tồn tại.'
                    })

                const rs = bcrypt.compareSync(password, user.password)
                if (!rs)
                    return res.status(500).json({
                        errMessage: 'Mật khẩu không chính xác.'
                    })

                const userInfo = user.toObject()
                delete userInfo.password
                return res.status(200).json({
                    errCode: 0,
                    user: userInfo
                })
            })
            .catch(next)
    }
}

module.exports = userController

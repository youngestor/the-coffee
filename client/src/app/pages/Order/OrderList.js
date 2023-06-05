function OrderList() {
    const handleSubmit = () => {
        alert('Bạn đã đặt hàng thành công!')
    }

    return (
        <form onSubmit={handleSubmit} className='order-wrapper'>
            <div className='title'>Thông tin thanh toán</div>
            <div className='form-checkout'>
                <div className='info'>
                    <div className='group-input'>
                        <label>
                            <span>Tên</span>
                            <input required />
                        </label>
                        <label>
                            <span>Họ</span>
                            <input required />
                        </label>
                    </div>
                    <label>
                        <span>Số điện thoại</span>
                        <input required />
                    </label>
                    <label>
                        <span>Địa chỉ</span>
                        <input required />
                    </label>
                </div>
                <div className='note'>
                    <label>
                        <span>Ghi chú</span>
                        <textarea rows='6'></textarea>
                    </label>
                </div>
            </div>
            <button type='submit' className='btn-checkout'>
                Đặt hàng
            </button>
        </form>
    );
}

export default OrderList;
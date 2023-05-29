function PageHeader({ title, desc }) {
    return (
        <div className='page-header-wrapper'>
            <div className='title'>
                {title}
            </div>
            <div className='desc'>
                {desc}
            </div>
        </div>
    );
}

export default PageHeader;
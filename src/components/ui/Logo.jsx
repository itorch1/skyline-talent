import logo from '../../images/logo.png'

function Logo() {
    return (
        <div className='h-full'>
            <img src={logo} alt="Skyline Talent logo" className='h-full w-auto object-contain' />
        </div>
    )
}

export default Logo

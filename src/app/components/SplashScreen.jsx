const SplashScreen = ({ className }) => {
  return (
    <div
      className={`${className} h-full bg-[#1a1a1a] rounded-[2rem] bg-gradient-to-t from-transparent from-50% via-[#4a1a88] via-70% to-[#cc98ee] flex flex-col gap-6`}
    >
      <div>
        <h2 className='text-[2rem] font-medium text-center'>
          Get Started with Us
        </h2>
        <p className='text-[#9e9e9e] text-center'>
          Complete these easy steps to register your account
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='bg-white text-black pl-4 py-3 pr-24 flex items-center gap-2  rounded-[.5rem]'>
          <span className='rounded-full bg-[#000] px-[14px] py-[6px] text-white '>
            1
          </span>
          <p className='font-medium block'>Sign up your account</p>
        </div>
        <div className='hover:bg-white hover:text-black px-4 py-3 flex items-center gap-2 bg-[#333333] rounded-[.5rem]'>
          <span className='rounded-full bg-[#3f3f3f] px-[14px] py-[6px] '>
            2
          </span>
          <p className=' font-medium'>Set up your Workspace</p>
        </div>
        <div className='hover:bg-white hover:text-black px-4 py-3 flex items-center gap-2 bg-[#333333] rounded-[.5rem]'>
          <span className='rounded-full bg-[#3f3f3f] px-[14px] py-[6px] '>
            3
          </span>
          <p className=' font-medium'>Set up your profile</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
// bg-gradient-to-t from-transparent from-70% to-[#cc98ee]

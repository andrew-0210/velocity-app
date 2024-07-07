import Form from './components/Form';
import SplashScreen from './components/SplashScreen';

export default function Home() {
  return (
    <section className='grid grid-cols-12 gap-4 p-[1rem] h-[100vh]'>
      <SplashScreen className=' col-span-6 flex items-center justify-end py-12' />
      <Form className='col-span-6 flex flex-col items-center justify-center p-10 gap-8' />
    </section>
  );
}

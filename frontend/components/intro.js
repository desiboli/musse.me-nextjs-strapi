import { CMS_NAME, CMS_URL } from '@/lib/constants';

export default function Intro() {
  return (
    <section className="">
      <h3 className="">Hello World!</h3>
      <h1 className="">I&apos;m Mustafa Adam Alshammaa</h1>
      <p>
        A very nice guy, frontend web developer, interested in UI/UX design and a certified Scrum
        Master
      </p>
      <button
        type="button"
        className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded">
        Button
      </button>
    </section>
  );
}

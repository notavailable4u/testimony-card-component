import { useState } from "react";
import { useFormStatus } from "react-dom";
import CreateCard from "./CreateCard";
import originalLightDark from "./assets/originalLightDark.png";
import blueLightDark from "./assets/blueLightDark.png";
import greenLightDark from "./assets/greenLightDark.png";

export default function InputForm() {
  const [data, setData] = useState([]);

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="md:col-span-2 enabled:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed w-full px-3 py-2 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
        disabled={pending}
      >
        {pending ? "Loading.." : "Submit"}
      </button>
    );
  }

  function handleSubmit(formData) {
    const formValues = Object.fromEntries(formData.entries());

    // Add a unique ID to each entry
    const newEntry = {
      id: crypto.randomUUID(),
      ...formValues,
    };

    setData((prevData) => [...prevData, newEntry]);
  }

  return (
    <>
      <div className="bg-white dark:bg-stone-900">
        <form
          action={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-[#282828] rounded-lg shadow-md space-y-4"
        >
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-2 border-2 border-blue-600 rounded-lg p-4 space-y-4">
            <legend className="text-lg font-semibold text-black dark:text-white">
              Enter Testimonial Information:{" "}
            </legend>
            <div>
            <label htmlFor="firstName" className="text-black dark:text-white">
              First Name:
              <input
                type="text"
                name="firstName"
                placeholder="Sarah"
                required
                className="w-full px-3 py-2 mb-2 text-black dark:text-white dark:bg-[#282828] border border-gray-300 rounded-md focus:border-sky-500 focus:outline focus:outline-sky-500 placeholder:text-gray-500 placeholder:italic"
              />
            </label>

            <label htmlFor="lastName" className=" text-black dark:text-white">
              Last Name:
              <input
                type="text"
                name="lastName"
                placeholder="Dole"
                required
                className="w-full px-3 py-2 mb-2 text-black dark:text-white dark:bg-[#282828] border border-gray-300 rounded-md focus:border-sky-500 focus:outline focus:outline-sky-500 placeholder:text-gray-500 placeholder:italic"
              />
            </label>

            <label htmlFor="email" className="text-black dark:text-white">
              Email:
              <input
                type="email"
                name="email"
                placeholder="email@domain.com"
                required
                className="w-full px-3 py-2 mb-2 text-black dark:text-white dark:bg-[#282828] border border-gray-300 rounded-md   invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 placeholder:text-gray-500 placeholder:italic"
              />
            </label>

            <label htmlFor="comments" className="text-black dark:text-white">
              Comments:
              <textarea
                name="comments"
                placeholder="&Prime;I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!&Prime;"
                required
                rows={4}
                maxLength={280}
                className="w-full px-3 py-2 text-black dark:text-white dark:bg-[#282828] border border-gray-300 rounded-md focus:border-sky-500 focus:outline focus:outline-sky-500 placeholder:text-gray-500 placeholder:italic"
              />
            </label>
            </div>
            <div>
            {/* theme picker */}
            <span className="text-black dark:text-white">
              Choose your theme:
            </span>

            <div className="flex flex-col flex-wrap">
              <div className="border-2 border-gray-300 dark:border-gray-600 rounded-md mb-2 p-2  hover:bg-gray-100 dark:hover:bg-gray-700">
                <label
                  htmlFor="originalDesign"
                  className="text-black dark:text-white "
                >
                  <input
                    type="radio"
                    name="theme"
                    defaultChecked
                    className="cursor-pointer"
                  />
                  <span className="pl-1 pr-3">Original - Gray</span>
                </label>
                <img
                  src={originalLightDark}
                  className="h-48 w-96 object-scale-down"
                  alt="Original theme light and dark mode preview"
                />
              </div>

              <div className="border-2 border-gray-300 dark:border-gray-600 rounded-md mb-2 p-2  hover:bg-sky-100 dark:hover:bg-sky-950">
                <label
                  htmlFor="alternate1"
                  className="text-black dark:text-white "
                >
                  <input
                    type="radio"
                    name="theme"
                    value="alternate1"
                    className="cursor-pointer"
                  />
                  <span className="pl-1 pr-3">Alternate 1 - Blue</span>
                </label>
                <img
                  src={blueLightDark}
                  className="h-48 w-96 object-scale-down"
                  alt="Alternate 1 theme light and dark mode preview"
                />
              </div>

              <div className="border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 hover:bg-green-100 dark:hover:bg-green-950">
                <label
                  htmlFor="alternate2"
                  className="text-black dark:text-white "
                >
                  <input
                    type="radio"
                    name="theme"
                    value="alternate2"
                    className="cursor-pointer"
                  />
                  <span className="pl-1 pr-3">Alternate 2 - Green</span>
                </label>
                <img
                  src={greenLightDark}
                  alt="Alternate 2 theme light and dark mode preview"
                  className="h-48 w-96 object-scale-down"
                />
              </div>
              {/* end theme picker */}
            </div>
            </div>
            <SubmitButton />
          </fieldset>
        </form>
      </div>
      <div className="bg-neutral-100 dark:bg-[#282828]">
        <h2 className="text-center text-2xl text-black dark:text-white">
          Testimonial Card Results
        </h2>
        <CreateCard data={data} />
      </div>
    </>
  );
}

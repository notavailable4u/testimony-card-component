import { useState } from "react";
import { useFormStatus } from "react-dom";
import CreateCard from "./CreateCard";
import originalLightDark from "./assets/originalLightDark.png";
import blueLightDark from "./assets/blueLightDark.png";
import greenLightDark from "./assets/greenLightDark.png";
import type { Testimonial, Theme } from "./types";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="sm:col-span-2 enabled:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed w-full px-3 py-2 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
      disabled={pending}
    >
      {pending ? "Loading.." : "Submit"}
    </button>
  );
}

export default function InputForm() {
  const [data, setData] = useState<Testimonial[]>([]);

  function handleSubmit(formData: FormData) {
    const field = (name: string) => String(formData.get(name) ?? "");

    // Add a unique ID to each entry
    const newEntry: Testimonial = {
      id: crypto.randomUUID(),
      firstName: field("firstName"),
      lastName: field("lastName"),
      email: field("email"),
      comments: field("comments"),
      theme: field("theme") as Theme,
    };

    setData((prevData) => [...prevData, newEntry]);
  }

  return (
    <>
      <div className="bg-white px-3 sm:px-6 dark:bg-stone-900">
        <form
          action={handleSubmit}
          className="max-w-3xl mx-auto bg-white dark:bg-[#282828] rounded-lg shadow-md"
        >
          <fieldset className="grid min-w-0 grid-cols-1 gap-4 border-2 border-blue-600 rounded-lg p-3 sm:grid-cols-2 sm:p-5">
            <legend className="text-lg font-semibold text-black dark:text-white">
              Enter Testimonial Information:{" "}
            </legend>
            <label htmlFor="firstName" className="text-black dark:text-white">
              First Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Sarah"
                required
                className="w-full px-3 py-2 text-black dark:text-white dark:bg-[#282828] border border-gray-300 rounded-md focus:border-sky-500 focus:outline focus:outline-sky-500 placeholder:text-gray-500 placeholder:italic"
              />
            </label>

            <label htmlFor="lastName" className=" text-black dark:text-white">
              Last Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Dole"
                required
                className="w-full px-3 py-2 text-black dark:text-white dark:bg-[#282828] border border-gray-300 rounded-md focus:border-sky-500 focus:outline focus:outline-sky-500 placeholder:text-gray-500 placeholder:italic"
              />
            </label>

            <label htmlFor="email" className="text-black dark:text-white sm:col-span-2">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@domain.com"
                required
                className="w-full px-3 py-2 text-black dark:text-white dark:bg-[#282828] border border-gray-300 rounded-md   invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 placeholder:text-gray-500 placeholder:italic"
              />
            </label>

            <label htmlFor="comments" className="text-black dark:text-white sm:col-span-2">
              Comments:
              <textarea
                id="comments"
                name="comments"
                placeholder="&Prime;I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!&Prime;"
                required
                rows={4}
                maxLength={280}
                className="w-full px-3 py-2 text-black dark:text-white dark:bg-[#282828] border border-gray-300 rounded-md focus:border-sky-500 focus:outline focus:outline-sky-500 placeholder:text-gray-500 placeholder:italic"
              />
            </label>
            <div className="sm:col-span-2">
              {/* theme picker */}
              <span className="text-black dark:text-white">
                Choose your theme:
              </span>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* The whole box is the label, so clicking anywhere in it (text,
                    preview image or padding) selects the theme. The selected box
                    keeps a colored border, ring and tint via has-checked:, which
                    is distinct from the lighter hover tint. */}
                <label
                  htmlFor="originalDesign"
                  className="block cursor-pointer border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 has-checked:ring-2 has-checked:border-gray-600 has-checked:ring-gray-600 dark:has-checked:border-gray-300 dark:has-checked:ring-gray-300 has-checked:bg-gray-100 dark:has-checked:bg-gray-700 has-focus-visible:outline-2 has-focus-visible:outline-sky-500"
                >
                  <input
                    type="radio"
                    id="originalDesign"
                    name="theme"
                    value="original"
                    defaultChecked
                    className="cursor-pointer"
                  />
                  <span className="pl-1 pr-3">Original - Gray</span>
                  <img
                    src={originalLightDark}
                    className="h-32 w-full object-scale-down sm:h-28 lg:h-36"
                    alt="Original theme light and dark mode preview"
                  />
                </label>

                <label
                  htmlFor="alternate1"
                  className="block cursor-pointer border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 text-black dark:text-white hover:bg-sky-100 dark:hover:bg-sky-950 has-checked:ring-2 has-checked:border-sky-600 has-checked:ring-sky-600 dark:has-checked:border-sky-400 dark:has-checked:ring-sky-400 has-checked:bg-sky-100 dark:has-checked:bg-sky-950 has-focus-visible:outline-2 has-focus-visible:outline-sky-500"
                >
                  <input
                    type="radio"
                    id="alternate1"
                    name="theme"
                    value="alternate1"
                    className="cursor-pointer"
                  />
                  <span className="pl-1 pr-3">Alternate 1 - Blue</span>
                  <img
                    src={blueLightDark}
                    className="h-32 w-full object-scale-down sm:h-28 lg:h-36"
                    alt="Alternate 1 theme light and dark mode preview"
                  />
                </label>

                <label
                  htmlFor="alternate2"
                  className="block cursor-pointer border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 text-black dark:text-white hover:bg-green-100 dark:hover:bg-green-950 has-checked:ring-2 has-checked:border-green-600 has-checked:ring-green-600 dark:has-checked:border-green-400 dark:has-checked:ring-green-400 has-checked:bg-green-100 dark:has-checked:bg-green-950 has-focus-visible:outline-2 has-focus-visible:outline-sky-500"
                >
                  <input
                    type="radio"
                    id="alternate2"
                    name="theme"
                    value="alternate2"
                    className="cursor-pointer"
                  />
                  <span className="pl-1 pr-3">Alternate 2 - Green</span>
                  <img
                    src={greenLightDark}
                    alt="Alternate 2 theme light and dark mode preview"
                    className="h-32 w-full object-scale-down sm:h-28 lg:h-36"
                  />
                </label>
                {/* end theme picker */}
              </div>
            </div>
            <SubmitButton />
          </fieldset>
        </form>
      </div>
      <div className="bg-neutral-100 px-3 py-4 sm:px-6 dark:bg-[#282828]">
        <h2 className="text-center text-2xl text-black dark:text-white">
          Testimonial Card Results
        </h2>
        <div className="mx-auto mt-4 grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] justify-items-center gap-4">
          <CreateCard data={data} />
        </div>
      </div>
    </>
  );
}

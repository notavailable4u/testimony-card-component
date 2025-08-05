import profileThumbnail from "./assets/profile-thumbnail.png";

/**
 * Renders a card for each user in the provided data array.
 * @param {Object} props
 * @param {Array} props.data - Array of user objects with id, firstName, lastName, email, and comments.
 * @returns {JSX.Element}
 */
function CreateCard({ data }) {
  return (
    <>
      {data.map((item) => {
        let backgroundVar;
        let borderBottomVar;
        let borderVar;
        let textColorVar;
        switch (item.theme) {
          case "alternate1":
            backgroundVar = "bg-sky-100 dark:bg-sky-950";
            borderBottomVar = "border-b-sky-700 border-b-2";
            borderVar =
              "border-2 border-sky-700 rounded-full dark:border-sky-500";
            textColorVar = "text-sky-900";
            break;
          case "alternate2":
            backgroundVar = "bg-green-100 dark:bg-green-950";
            borderBottomVar = "border-b-green-300 border-b-2";
            borderVar =
              "border-2 border-green-300 rounded-full dark:border-green-500";
            textColorVar = "text-green-900";
            break;
          default:
            backgroundVar = "bg-zinc-300 dark:bg-[#121212]";
            borderBottomVar = "";
            borderVar = "";
            textColorVar = "text-neutral-900";
            break;
        }
        return (
          <div
            className={`max-w-lg mx-auto ${backgroundVar} flex flex-col mb-2 justify-start items-center py-5 border-2 border-slate-600 rounded-lg`}
            key={item.id}
          >
            <div className="w-[340px] flex flex-col gap-4 bg-white dark:bg-[#282828] p-6 rounded-lg drop-shadow-sm border-2 border-zinc-500 dark:border-zinc-400 my-5">
              <div
                className={`flex items-center gap-4 self-stretch ${borderBottomVar} p-2`}
              >
                <div className="w-12 h-12">
                  <img
                    src={profileThumbnail}
                    className={`object-cover w-12 h-12 ${borderVar}`}
                    alt={`Profile picture of ${item.firstName} ${item.lastName}`}
                    title={`${item.firstName} ${item.lastName}`}
                  />
                </div>
                <div className="flex flex-col gap-px grow">
                  <span
                    className={`font-semibold text-lg text-justify ${textColorVar} dark:text-white`}
                  >
                    {item.firstName} {item.lastName}
                  </span>
                  <span
                    className={`font-normal text-sm ${textColorVar} dark:text-white`}
                  >
                    {item.email}
                  </span>
                </div>
              </div>
              <span className="font-normal text-base text-neutral-600 dark:text-white">
                {item.comments}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CreateCard;

// This component renders a card for each user in the provided data array.
// Each card displays the user's profile picture, name, email, and comments.
// The component is styled with Tailwind CSS classes for a responsive and modern look.
// The profile picture is a placeholder image imported from assets.
// The component is designed to be used in a React application, and it expects a prop 'data' which is an array of user objects.
// Each user object should contain 'id', 'firstName', 'lastName', 'email', and 'comments' properties.
// The component uses a dark mode theme with appropriate styling for light and dark backgrounds.
// The cards are displayed in a flex container that centers them both vertically and horizontally on the page.
// The component is responsive and adjusts to different screen sizes, ensuring a good user experience across devices.
// The use of 'key' prop in the map function ensures that each card is uniquely identified, which is important for React's reconciliation process.
// The component can be easily extended or modified to include additional user information or styling as needed.
// It is a functional component that does not maintain any internal state, making it simple and efficient for rendering static data.
// The component can be imported and used in other parts of the application, allowing for modular design and reusability

// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import Button from "./Button";

// // const StepOneForm = () => {
// //   const router = useRouter();
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     telephone: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     router.push("/step2");
// //   };

// //   return (
// //     <div className="flex relative items-center justify-center bg-gray-100">
// //       <main className="w-full max-w-lg p-4 rounded shadow-md bg-white">
// //         <header className="mb-4">
// //           <h1 className="font-bold text-xl">Personal Information</h1>
// //           <p>Please provide your name, email address, and phone number</p>
// //         </header>
// //         <form onSubmit={handleSubmit} className="w-full">
// //           <div className="mb-4">
// //             <label className="font-bold text-sm" htmlFor="firstName">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               id="firstName"
// //               name="firstName"
// //               value={formData.firstName}
// //               onChange={handleChange}
// //               required
// //               placeholder="e.g. Stephen King"
// //               className="block w-full p-2 border border-gray-300 rounded"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="font-bold text-sm" htmlFor="email">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //               placeholder="e.g. stephenking@lorem.com"
// //               className="block w-full p-2 border border-gray-300 rounded"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="font-bold text-sm" htmlFor="telephone">
// //               Phone Number
// //             </label>
// //             <input
// //               type="tel"
// //               id="telephone"
// //               name="telephone"
// //               value={formData.telephone}
// //               onChange={handleChange}
// //               required
// //               placeholder="e.g. +1 234 567 890"
// //               className="block w-full p-2 border border-gray-300 rounded"
// //             />
// //           </div>

// //           <Button
// //             type="submit"
// //             className="p-4 bg-blue-900 text-white rounded-lg w-full"
// //           >
// //             Next
// //           </Button>
// //         </form>
// //       </main>
// //     </div>
// //   );
// // };

// // export default StepOneForm;
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Button from "./Button";

// const StepOneForm = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     telephone: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     router.push("/step2");
//   };

//   return (
//     <div className="flex relative top-60 z-10 items-center justify-center p-4 md:h-full md:top-0 ">
//       <main className="w-full max-w-lg p-4 rounded shadow-md bg-white">
//         <header className="mb-4">
//           <h1 className="font-bold text-xl">Personal Information</h1>
//           <p>Please provide your name, email address, and phone number</p>
//         </header>
//         <form onSubmit={handleSubmit} className="w-full">
//           <div className="mb-4">
//             <label className="font-bold text-sm" htmlFor="firstName">
//               Name
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               placeholder="e.g. Stephen King"
//               className="block w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="font-bold text-sm" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="e.g. stephenking@lorem.com"
//               className="block w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="font-bold text-sm" htmlFor="telephone">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="telephone"
//               name="telephone"
//               value={formData.telephone}
//               onChange={handleChange}
//               required
//               placeholder="e.g. +1 234 567 890"
//               className="block w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <Button
//             type="submit"
//             className="p-4 bg-blue-900 text-white rounded-lg w-full"
//           >
//             Next
//           </Button>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default StepOneForm;
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const StepOneForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/step2");
  };

  return (
    <div className="relative flex z-10 top-60 md:top-0 items-center justify-center p-4 md:h-full md:ml-auto md:w-2/3">
      <main className="w-full max-w-lg p-4 rounded shadow-md bg-white">
        <header className="mb-4">
          <h1 className="font-bold text-xl">Personal Information</h1>
          <p>Please provide your name, email address, and phone number</p>
        </header>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="font-bold text-sm" htmlFor="firstName">
              Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="e.g. Stephen King"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="e.g. stephenking@lorem.com"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold text-sm" htmlFor="telephone">
              Phone Number
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              placeholder="e.g. +1 234 567 890"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <Button
            type="submit"
            className="p-4 bg-blue-900 text-white rounded-lg w-full"
          >
            Next
          </Button>
        </form>
      </main>
    </div>
  );
};

export default StepOneForm;

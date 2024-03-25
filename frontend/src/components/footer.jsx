

// import React from 'react';

// export default function App() {
//   return (
//     <footer
//     className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
//     <div className="container p-6 text-neutral-800 dark:text-neutral-200">
//       <div className="grid gap-4 lg:grid-cols-2 border-top">
//         <div className="mb-6 md:mb-0 ">
        
//           <h5 className="mb-2 font-medium uppercase text-bold">Contact Us</h5>

//           <p className="mb-4">
//           Zetech University,

// Main Campus, Off Thika Road - Ruiru<br></br>

// P.O. Box 2768 00200, Nairobi.<br></br>

// Email: info@zetech.ac.ke<br></br>

// Call: 0719034500 or<br></br>

// WhatsApp: 0706622557<br></br>
//           </p>
//         </div>

        
//       </div>
//     </div>

//     {/* <!--Copyright section--> */}
//     <div
//       className="bg-black p-4 text-center text-white dark:bg-neutral-700 dark:text-neutral-200
//       ">
//       © 2023 Copyright:
//       <a
//         className="text-neutral-800 dark:text-neutral-400">
//         </a>
//     </div>
//   </footer>
//   );
// }

import React from 'react';

export default function App() {
  return (
    <footer
      className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left"
    >
      <div className="container p-6 text-neutral-800 dark:text-neutral-200">
        <div className="border-b border-neutral-800 dark:border-neutral-200"></div>  {/* Border element */}
        <div className="grid gap-4 lg:grid-cols-2 border-top">  {/* Remove border-top here if using separate element */}
          <div className="mb-6 md:mb-0 ">
            <h5 className="mb-2 font-medium uppercase text-bold">Contact Us</h5>
            <p className="mb-4">
              Zetech University,
              <br />
              Main Campus, Off Thika Road - Ruiru
              <br />
              P.O. Box 2768 00200, Nairobi.
              <br />
              Email: info@zetech.ac.ke
              <br />
              Call: 0719034500 or
              <br />
              WhatsApp: 0706622557
              <br />
            </p>
          </div>
          {/* ... other content */}
        </div>
      </div>

      <div
        className="bg-black p-4 text-center text-white dark:bg-neutral-700 dark:text-neutral-200"
      >
        © 2023 Copyright: Zetech University  {/* Add your organization name */}
      </div>
    </footer>
  );
}



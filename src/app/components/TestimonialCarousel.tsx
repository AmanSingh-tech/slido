// import { useState } from "react";

// const testimonials = [
//     {
//         id: 1,
//         quote:
//             "Quizzes were the game changer for us. The competitive element got people interested in the content and took our participation from 40 up to 90 percent.",
//         author: "Brian Davenport",
//         position: "VP of Service",
//         companyName: "A1 Garage Door Service",
//         companyLogo: "/a1garage-logo.png", // Replace with your logo file path
//         image: "/brian-davenport.png", // Replace with the user image path
//     },
// ];

// const Testimonial = () => {
//     const [current, setCurrent] = useState(0);

//     const nextSlide = () => {
//         setCurrent((prev) => (prev + 1) % testimonials.length);
//     };

//     const prevSlide = () => {
//         setCurrent((prev - 1 + testimonials.length) % testimonials.length);
//     };

//     const { quote, author, position, companyName, companyLogo, image } =
//         testimonials[current];

//     return (
//         <section className="bg-green-700 py-16 text-white">
//             <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
//                 {/* Profile Image and Company Logo */}
//                 <div className="flex items-center justify-center space-x-6 mb-6">
//                     <div className="relative w-28 h-28">
//                         <img
//                             src={image}
//                             alt={author}
//                             className="w-28 h-28 rounded-full object-cover border-4 border-white"
//                         />
//                     </div>
//                     <div className="flex flex-col justify-center">
//                         <img
//                             src={companyLogo}
//                             alt={`${companyName} Logo`}
//                             className="h-10"
//                         />
//                     </div>
//                 </div>

//                 {/* Quote */}
//                 <blockquote className="text-xl font-medium leading-relaxed">
//                     <span className="text-5xl font-bold text-white">“</span> {quote}
//                 </blockquote>

//                 {/* Author and Position */}
//                 <div className="mt-6">
//                     <p className="text-lg font-semibold">{author}</p>
//                     <p className="text-sm font-light">{position}</p>
//                 </div>

//                 {/* Navigation */}
//                 <div className="flex items-center justify-center mt-8 space-x-4">
//                     <button
//                         onClick={prevSlide}
//                         className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-700 hover:bg-gray-200"
//                     >
//                         &larr;
//                     </button>
//                     <span>
//                         {current + 1}/{testimonials.length}
//                     </span>
//                     <button
//                         onClick={nextSlide}
//                         className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-700 hover:bg-gray-200"
//                     >
//                         &rarr;
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Testimonial;

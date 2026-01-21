"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

// Event 1: Annual Sports Festival 2024
const sportsPhotos = [
  "/section_images/607650908_1282461717263786_3862138062056957348_n.jpg",
  "/section_images/608183989_1282462423930382_5650085790033293802_n.jpg",
  "/section_images/608509993_1282461333930491_699045363420288147_n.jpg",
  "/section_images/608513656_1282462430597048_8542405572521772888_n.jpg",
  "/section_images/608819511_1282462377263720_7191083207580473107_n.jpg",
];

// Event 2: Cultural Night Celebration
const culturalPhotos = [
  "/section_images/608513656_1282462430597048_8542405572521772888_n.jpg",
  "/section_images/608819511_1282462377263720_7191083207580473107_n.jpg",
  "/section_images/608952491_1282462463930378_7888523224659440233_n.jpg",
  "/section_images/609060861_1282461587263799_7997125770166090445_n.jpg",
  "/section_images/610933396_1282461303930494_3058304200133247076_n.jpg",
];

// Event 3: Academic Excellence Awards
const academicPhotos = [
  "/section_images/609060861_1282461587263799_7997125770166090445_n.jpg",
  "/section_images/610933396_1282461303930494_3058304200133247076_n.jpg",
  "/section_images/611160498_1282461290597162_6210627406435945487_n.jpg",
  "/section_images/611324135_1282462387263719_4357512669804949091_n.jpg",
  "/section_images/611567133_1282461617263776_6726718859910254632_n.jpg",
];

// Event 4: Community Outreach Program
const outreachPhotos = [
  "/section_images/611324135_1282462387263719_4357512669804949091_n.jpg",
  "/section_images/611567133_1282461617263776_6726718859910254632_n.jpg",
  "/section_images/612083956_1282462433930381_1166619516274906421_n.jpg",
  "/section_images/612176946_1282461347263823_7422548309522222814_n.jpg",
  "/section_images/612368329_1282461727263785_1405380601943710082_n.jpg",
];

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);
  const carouselRef3 = useRef<HTMLDivElement>(null);
  const carouselRef4 = useRef<HTMLDivElement>(null);

  const openImage = (image: string, photos: string[]) => {
    setCurrentPhotos(photos);
    const index = photos.indexOf(image);
    setCurrentImageIndex(index);
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % currentPhotos.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(currentPhotos[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + currentPhotos.length) % currentPhotos.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(currentPhotos[newIndex]);
  };

  const handleWheel = (e: React.WheelEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      e.preventDefault();
      ref.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Back Arrow */}
      <Link 
        href="/publication2" 
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 text-[#d82f50] hover:text-[#b5263f] transition-all hover:scale-110"
      >
        <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </Link>

      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-[#d82f50]/15 to-gray-100">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#d82f50]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-[#d82f50]/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-[#d82f50]/6 rounded-full blur-3xl animate-pulse"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(216,47,80,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(216,47,80,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#d82f50]/10 border border-[#d82f50]/20 mb-6 sm:mb-8 animate-fade-in">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#d82f50]" />
            <span className="text-xs sm:text-sm font-semibold text-[#d82f50]">
              100+ Events/Year
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            <span className="font-[family-name:var(--font-gladiola)] text-[#d82f50]">School</span> Events
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            From foundation day celebrations to academic forums, there's always something happening at UIC
          </p>
        </div>

        {/* Wave Animation Overlay */}
        <div className="wave-wrapper">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="#fff" />
            </g>
          </svg>
        </div>
      </section>

      {/* Event 1: Annual Sports Festival 2024 */}
      <section className="event-carousel-section">
        <div className="container mx-auto px-2 sm:px-4 mb-8 sm:mb-12 text-left max-w-7xl">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-[#d82f50]" />
            <p className="text-sm sm:text-base text-gray-500">March 15, 2024</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="font-[family-name:var(--font-gladiola)] text-[#d82f50]">Annual Sports</span> Festival 2024
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl">
            UIC's biggest sports event of the year featuring competitions across multiple sports disciplines.
          </p>
        </div>
        <div 
          className="carousel-wrapper-events" 
          ref={carouselRef1}
          onWheel={(e) => handleWheel(e, carouselRef1)}
        >
          <div className="carousel-track-events">
            {sportsPhotos.concat(sportsPhotos).map((photo, index) => (
              <div className="carousel-slide-event" key={index}>
                <div 
                  className="carousel-image-wrapper-event cursor-pointer"
                  onClick={() => openImage(photo, sportsPhotos)}
                >
                  <Image
                    src={photo}
                    alt={`Sports Festival ${index + 1}`}
                    fill
                    className="carousel-image-event"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event 2: Cultural Night Celebration */}
      <section className="event-carousel-section">
        <div className="container mx-auto px-2 sm:px-4 mb-8 sm:mb-12 text-left max-w-7xl">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-[#d82f50]" />
            <p className="text-sm sm:text-base text-gray-500">February 28, 2024</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="font-[family-name:var(--font-gladiola)] text-[#d82f50]">Cultural Night</span> Celebration
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl">
            A vibrant showcase of diverse cultures with performances, food, and traditional presentations.
          </p>
        </div>
        <div 
          className="carousel-wrapper-events" 
          ref={carouselRef2}
          onWheel={(e) => handleWheel(e, carouselRef2)}
        >
          <div className="carousel-track-events">
            {culturalPhotos.concat(culturalPhotos).map((photo, index) => (
              <div className="carousel-slide-event" key={index}>
                <div 
                  className="carousel-image-wrapper-event cursor-pointer"
                  onClick={() => openImage(photo, culturalPhotos)}
                >
                  <Image
                    src={photo}
                    alt={`Cultural Night ${index + 1}`}
                    fill
                    className="carousel-image-event"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event 3: Academic Excellence Awards */}
      <section className="event-carousel-section">
        <div className="container mx-auto px-2 sm:px-4 mb-8 sm:mb-12 text-left max-w-7xl">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-[#d82f50]" />
            <p className="text-sm sm:text-base text-gray-500">January 20, 2024</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="font-[family-name:var(--font-gladiola)] text-[#d82f50]">Academic Excellence</span> Awards
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl">
            Recognizing outstanding academic achievements and scholarly contributions of our students.
          </p>
        </div>
        <div 
          className="carousel-wrapper-events" 
          ref={carouselRef3}
          onWheel={(e) => handleWheel(e, carouselRef3)}
        >
          <div className="carousel-track-events">
            {academicPhotos.concat(academicPhotos).map((photo, index) => (
              <div className="carousel-slide-event" key={index}>
                <div 
                  className="carousel-image-wrapper-event cursor-pointer"
                  onClick={() => openImage(photo, academicPhotos)}
                >
                  <Image
                    src={photo}
                    alt={`Academic Awards ${index + 1}`}
                    fill
                    className="carousel-image-event"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event 4: Community Outreach Program */}
      <section className="event-carousel-section">
        <div className="container mx-auto px-2 sm:px-4 mb-8 sm:mb-12 text-left max-w-7xl">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-[#d82f50]" />
            <p className="text-sm sm:text-base text-gray-500">December 10, 2023</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="font-[family-name:var(--font-gladiola)] text-[#d82f50]">Community Outreach</span> Program
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl">
            Students and faculty working together to make a positive impact in the local community.
          </p>
        </div>
        <div 
          className="carousel-wrapper-events" 
          ref={carouselRef4}
          onWheel={(e) => handleWheel(e, carouselRef4)}
        >
          <div className="carousel-track-events">
            {outreachPhotos.concat(outreachPhotos).map((photo, index) => (
              <div className="carousel-slide-event" key={index}>
                <div 
                  className="carousel-image-wrapper-event cursor-pointer"
                  onClick={() => openImage(photo, outreachPhotos)}
                >
                  <Image
                    src={photo}
                    alt={`Community Outreach ${index + 1}`}
                    fill
                    className="carousel-image-event"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center animate-fade-in"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-[#d82f50] transition-colors z-[101]"
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 text-white hover:text-[#d82f50] transition-colors z-[101]"
          >
            <ChevronLeft className="w-10 h-10 sm:w-12 sm:h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 text-white hover:text-[#d82f50] transition-colors z-[101]"
          >
            <ChevronRight className="w-10 h-10 sm:w-12 sm:h-12" />
          </button>

          <div 
            className="relative w-[90%] h-[90%] max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base">
            {currentImageIndex + 1} / {currentPhotos.length}
          </div>
        </div>
      )}
    </div>
  );
}

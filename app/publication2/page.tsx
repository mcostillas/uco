"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Camera, Calendar, Heart, MessageCircle, X, Mail, Phone, MapPin } from "lucide-react";

const latestPosts = [
  {
    id: 1,
    platform: "Facebook",
    caption: "🎉 Celebrating another successful academic year with our amazing students! Thank you for letting us capture your unforgettable moments.",
    date: "January 15, 2026",
    image: "/section_images/607650908_1282461717263786_3862138062056957348_n.jpg",
    platformColor: "#1877F2",
    link: "https://www.facebook.com/uicph"
  },
  {
    id: 2,
    platform: "Instagram",
    caption: "Behind the lens 📸 Our publication team hard at work documenting every special moment at UIC. Swipe to see what we've been up to!",
    date: "January 12, 2026",
    image: "/section_images/608513656_1282462430597048_8542405572521772888_n.jpg",
    platformColor: "#E4405F",
    link: "https://www.instagram.com/uic_ph/"
  },
  {
    id: 3,
    platform: "Threads",
    caption: "Quick update: We're gearing up for the biggest event of the semester! Stay tuned for exclusive coverage and behind-the-scenes content. 🎬✨",
    date: "January 10, 2026",
    image: "/section_images/611324135_1282462387263719_4357512669804949091_n.jpg",
    platformColor: "#000000",
    link: "https://www.threads.com/@uic_ph?hl=en"
  }
];

const events = [
  {
    id: 1,
    title: "Annual Sports Festival 2024",
    date: "March 15, 2024",
    description: "UIC's biggest sports event of the year featuring competitions across multiple sports disciplines.",
    coverImage: "/section_images/608819511_1282462377263720_7191083207580473107_n.jpg",
    photos: [
      "/section_images/608819511_1282462377263720_7191083207580473107_n.jpg",
      "/section_images/609060861_1282461587263799_7997125770166090445_n.jpg",
      "/section_images/610933396_1282461303930494_3058304200133247076_n.jpg",
      "/section_images/611160498_1282461290597162_6210627406435945487_n.jpg"
    ]
  },
  {
    id: 2,
    title: "Cultural Night Celebration",
    date: "February 28, 2024",
    description: "A vibrant showcase of diverse cultures with performances, food, and traditional presentations.",
    coverImage: "/section_images/608183989_1282462423930382_5650085790033293802_n.jpg",
    photos: [
      "/section_images/608183989_1282462423930382_5650085790033293802_n.jpg",
      "/section_images/608509993_1282461333930491_699045363420288147_n.jpg",
      "/section_images/608952491_1282462463930378_7888523224659440233_n.jpg",
      "/section_images/612176946_1282461347263823_7422548309522222814_n.jpg"
    ]
  },
  {
    id: 3,
    title: "Academic Excellence Awards",
    date: "January 20, 2024",
    description: "Recognizing outstanding academic achievements and scholarly contributions from students.",
    coverImage: "/section_images/607650908_1282461717263786_3862138062056957348_n.jpg",
    photos: [
      "/section_images/607650908_1282461717263786_3862138062056957348_n.jpg",
      "/section_images/611324135_1282462387263719_4357512669804949091_n.jpg",
      "/section_images/612368329_1282461727263785_1405380601943710082_n.jpg",
      "/section_images/608513656_1282462430597048_8542405572521772888_n.jpg"
    ]
  }
];

export default function Publication2Page() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event: typeof events[0]) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Back Arrow */}
      <Link 
        href="/" 
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 text-[#d82f50] hover:text-[#b5263f] transition-all hover:scale-110"
      >
        <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </Link>

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-white via-[#d82f50]/5 to-white">
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
            <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-[#d82f50]" />
            <span className="text-xs sm:text-sm font-semibold text-[#d82f50]">
              UIC Publication Team
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            <span className="font-[family-name:var(--font-gladiola)] text-[#d82f50]">Capturing</span> Moments,
            <br />
            <span className="font-[family-name:var(--font-gladiola)] text-[#d82f50]">Telling</span> Stories
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Documenting the vibrant life of UIC through compelling visuals and preserving memories that matter
          </p>
        </div>

        {/* Wave Animation Overlay */}
        <div className="wave-wrapper">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(216,47,80,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(216,47,80,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(216,47,80,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Explore Our <span className="font-[family-name:var(--font-gladiola)] text-[#d82f50]">Categories</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Browse through different aspects of campus life and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Events Card */}
            <Link 
              href="/events"
              className="group relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <Image
                src="/section_images/608819511_1282462377263720_7191083207580473107_n.jpg"
                alt="Events"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-[#d82f50] mb-3 sm:mb-4" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-gladiola)]">
                  Events
                </h3>
                <p className="text-sm sm:text-base text-gray-200">
                  Discover campus happenings and celebrations
                </p>
              </div>
            </Link>

            {/* Organizations & Clubs Card */}
            <div className="group relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer">
              <Image
                src="/section_images/611324135_1282462387263719_4357512669804949091_n.jpg"
                alt="Organizations & Clubs"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-[#d82f50] mb-3 sm:mb-4" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-gladiola)]">
                  Organizations & Clubs
                </h3>
                <p className="text-sm sm:text-base text-gray-200">
                  Join vibrant student communities
                </p>
              </div>
            </div>

            {/* Announcements Card */}
            <div className="group relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer">
              <Image
                src="/section_images/607650908_1282461717263786_3862138062056957348_n.jpg"
                alt="Announcements"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#d82f50] mb-3 sm:mb-4" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-gladiola)]">
                  Announcements
                </h3>
                <p className="text-sm sm:text-base text-gray-200">
                  Stay updated with latest news
                </p>
              </div>
            </div>

            {/* Academics Card */}
            <div className="group relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer">
              <Image
                src="/section_images/608513656_1282462430597048_8542405572521772888_n.jpg"
                alt="Academics"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-[#d82f50] mb-3 sm:mb-4" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-gladiola)]">
                  Academics
                </h3>
                <p className="text-sm sm:text-base text-gray-200">
                  Excellence in education and achievement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content will go here - Different from version 1 */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Alternative <span className="font-[family-name:var(--font-gladiola)] text-[#d82f50]">Layout</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              This is version 2 of the publication page with the same hero and footer
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 md:mb-12">
            {/* About Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                <span className="font-[family-name:var(--font-gladiola)] text-[#d82f50]">UIC</span> Publication
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-3 sm:mb-4">
                Capturing moments and telling stories that matter. Documenting the vibrant life of UIC through compelling visuals.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link href="/" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-[#d82f50] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/publication" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-[#d82f50] transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-[#d82f50] transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Contact Us</h4>
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                <li className="flex items-start gap-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#d82f50] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">University of the Immaculate Conception, Davao City</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#d82f50] flex-shrink-0" />
                  <a href="mailto:publication@uic.edu.ph" className="text-xs sm:text-sm hover:text-[#d82f50] transition-colors break-all">
                    publication@uic.edu.ph
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#d82f50] flex-shrink-0" />
                  <span className="text-xs sm:text-sm">(082) 227-8192</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link
                  href="https://www.facebook.com/uicph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-800 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/uic_ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-800 hover:bg-[#E4405F] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.threads.com/@uic_ph?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-800 hover:bg-black flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 192 192">
                    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.tiktok.com/@uicph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-800 hover:bg-black flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-4 sm:pt-6 md:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4">
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © {new Date().getFullYear()} University of the Immaculate Conception. All rights reserved.
              </p>
              <div className="flex gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-400">
                <Link href="#" className="hover:text-[#d82f50] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-[#d82f50] transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

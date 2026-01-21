import Link from "next/link";
import { Camera, Users, Award, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PublicationSection() {
  return (
    <section className="relative w-full py-8 sm:py-10 md:py-12 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#d82f50]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#d82f50]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Photo Collage C-Shape Border on Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] lg:w-[450px] h-[400px] md:h-[500px] lg:h-[600px] pointer-events-none hidden md:block">
        <div className="relative w-full h-full">
          {/* C-shaped border (inverted - opens to the right) */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full border-2 border-r-0 border-[#d82f50]/30 rounded-l-full"></div>
          </div>
          
          {/* Photo scrolling container inside the C */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-l-full">
            {/* Vignette overlay following curved border */}
            <div className="absolute inset-0 rounded-l-full z-20 pointer-events-none" style={{
              background: 'radial-gradient(ellipse 100% 100% at 0% 50%, transparent 40%, #d82f50 100%)'
            }}></div>
            
            {/* 4.png overlay at lower right above vignette */}
            <div className="absolute bottom-16 right-0 w-24 h-16 z-30">
              <Image
                src="/4.png"
                alt="UIC Publication logo"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Photo collage scrolling container - multi-row collage */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="flex animate-scroll-left">
                {/* First set of images */}
                <div className="flex flex-col gap-1 flex-shrink-0 justify-center h-full">
                  {/* Row 1 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/607650908_1282461717263786_3862138062056957348_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608183989_1282462423930382_5650085790033293802_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608509993_1282461333930491_699045363420288147_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608513656_1282462430597048_8542405572521772888_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608819511_1282462377263720_7191083207580473107_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608952491_1282462463930378_7888523224659440233_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/609060861_1282461587263799_7997125770166090445_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/610933396_1282461303930494_3058304200133247076_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/611160498_1282461290597162_6210627406435945487_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/611324135_1282462387263719_4357512669804949091_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 6 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/607650908_1282461717263786_3862138062056957348_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608183989_1282462423930382_5650085790033293802_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex flex-col gap-1 flex-shrink-0 justify-center h-full">
                  {/* Row 1 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/607650908_1282461717263786_3862138062056957348_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608183989_1282462423930382_5650085790033293802_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608509993_1282461333930491_699045363420288147_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608513656_1282462430597048_8542405572521772888_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608819511_1282462377263720_7191083207580473107_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608952491_1282462463930378_7888523224659440233_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/609060861_1282461587263799_7997125770166090445_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/610933396_1282461303930494_3058304200133247076_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/611160498_1282461290597162_6210627406435945487_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/611324135_1282462387263719_4357512669804949091_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 6 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/607650908_1282461717263786_3862138062056957348_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608183989_1282462423930382_5650085790033293802_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Duplicate set 2 for seamless loop */}
                <div className="flex flex-col gap-1 flex-shrink-0 justify-center h-full">
                  {/* Row 1 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/607650908_1282461717263786_3862138062056957348_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608183989_1282462423930382_5650085790033293802_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608509993_1282461333930491_699045363420288147_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608513656_1282462430597048_8542405572521772888_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608819511_1282462377263720_7191083207580473107_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608952491_1282462463930378_7888523224659440233_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/609060861_1282461587263799_7997125770166090445_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/610933396_1282461303930494_3058304200133247076_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/611160498_1282461290597162_6210627406435945487_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/611324135_1282462387263719_4357512669804949091_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 6 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/607650908_1282461717263786_3862138062056957348_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608183989_1282462423930382_5650085790033293802_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Duplicate set 3 for seamless loop */}
                <div className="flex flex-col gap-1 flex-shrink-0 justify-center h-full">
                  {/* Row 1 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/607650908_1282461717263786_3862138062056957348_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608183989_1282462423930382_5650085790033293802_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608509993_1282461333930491_699045363420288147_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608513656_1282462430597048_8542405572521772888_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608819511_1282462377263720_7191083207580473107_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608952491_1282462463930378_7888523224659440233_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/609060861_1282461587263799_7997125770166090445_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/610933396_1282461303930494_3058304200133247076_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/611160498_1282461290597162_6210627406435945487_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/611324135_1282462387263719_4357512669804949091_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  {/* Row 6 */}
                  <div className="flex gap-1">
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/607650908_1282461717263786_3862138062056957348_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="relative w-48 h-28 rounded-lg overflow-hidden shadow-lg group">
                      <Image
                        src="/section_images/608183989_1282462423930382_5650085790033293802_n.jpg"
                        alt="UIC Publication photo"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pink accent glow */}
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#d82f50]/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:pl-16 lg:pr-0">
        <div className="max-w-xl">
          {/* Left Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#d82f50]/10 border border-[#d82f50]/20">
              <Camera className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d82f50]" />
              <span className="text-xs sm:text-sm font-medium text-[#d82f50]">
                UIC - UCO
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Capturing Moments,
                <br />
                <span className="text-[#d82f50] font-[family-name:var(--font-gladiola)]">Telling Stories</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Meet the creative minds behind every captured moment at UIC.
                Our publication team documents the vibrant life of our campus,
                preserving memories that matter.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-start gap-2 sm:gap-2.5">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg bg-[#d82f50]/10 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#d82f50]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5 text-xs sm:text-sm">
                    Dedicated Team
                  </h3>
                  <p className="text-xs text-gray-600">
                    Professional photographers and writers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-2.5">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg bg-[#d82f50]/10 flex items-center justify-center">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#d82f50]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5 text-xs sm:text-sm">
                    Award-Winning
                  </h3>
                  <p className="text-xs text-gray-600">
                    Recognized for excellence in journalism
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-1 sm:pt-2">
              <Link
                href="/publication"
                className="group inline-flex items-center gap-1 sm:gap-1.5 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#d82f50] text-white font-semibold text-xs sm:text-sm rounded-full hover:bg-[#b5263f] transition-all duration-300 shadow-lg shadow-[#d82f50]/25 hover:shadow-xl hover:shadow-[#d82f50]/30 hover:scale-105"
              >
                View Our Work
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

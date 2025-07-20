'use client'

import Image from 'next/image'
import { overlay } from 'overlay-kit'

import { AspectRatio } from 'src/components/ui/aspect-ratio'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from 'src/components/ui/carousel'
import { Dialog, DialogContent, DialogTitle } from 'src/components/ui/dialog'

const GallerySection = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-6 mb-10">
        <p className="text-center text-4xl font-sometimes-times font-bold text-gray-800 tracking-wider ">
          GALLERY
        </p>

        <p className="text-center text-sm text-gray-500">
          사진을 클릭하시면 전체 화면 보기가 가능합니다.
        </p>
      </div>

      <div className="w-full grid grid-cols-3 gap-[2px]">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <div key={index} className="relative w-full h-[148px]">
              <div className="absolute w-full h-full">
                <Image
                  src={`/images/carousel-${index + 1}.jpg`}
                  alt="gallery"
                  fill={true}
                  key={index}
                  className="object-cover"
                  onClick={() => {
                    overlay.open(({ close, isOpen }) => (
                      <Dialog open={isOpen} onOpenChange={close}>
                        <DialogContent className="w-full max-w-[448px] rounded-none h-screen items-center p-0">
                          <DialogTitle className="sr-only">사진</DialogTitle>

                          <Carousel className="w-full bg-red-50">
                            <CarouselContent>
                              {Array.from({ length: 5 }).map((_, index) => {
                                return (
                                  <CarouselItem key={index}>
                                    <AspectRatio ratio={4 / 3}>
                                      <Image
                                        src={`/images/carousel-${index + 1}.jpg`}
                                        alt="gallery"
                                        fill={true}
                                        className="object-cover"
                                      />
                                    </AspectRatio>
                                  </CarouselItem>
                                )
                              })}
                            </CarouselContent>
                          </Carousel>
                        </DialogContent>
                      </Dialog>
                    ))
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default GallerySection

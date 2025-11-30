'use client'

import Image from 'next/image'
import { overlay } from 'overlay-kit'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from 'src/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from 'src/components/ui/dialog'

const TOTAL_IMAGES = 26

const GalleryDialog = ({
  isOpen,
  close,
  initialIndex,
}: {
  isOpen: boolean
  close: () => void
  initialIndex: number
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent
        className="w-full max-w-[448px] rounded-none h-dvh max-h-dvh flex flex-col justify-center p-0 bg-white"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <DialogTitle className="sr-only">갤러리 사진</DialogTitle>
        <DialogDescription className="sr-only">
          갤러리 사진 전체 화면 보기
        </DialogDescription>

        <Carousel
          className="w-full"
          opts={{
            startIndex: initialIndex,
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: TOTAL_IMAGES }).map((_, index) => {
              const distance = Math.abs(index - initialIndex)

              return (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center"
                >
                  <Image
                    src={`/images/image-${index + 1}.webp`}
                    alt={`갤러리 사진 ${index + 1}`}
                    width={450}
                    height={600}
                    quality={85}
                    sizes="448px"
                    className="w-full h-auto"
                    priority={distance <= 2}
                    loading="eager"
                  />
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}

const GallerySection = () => {
  const openGallery = (index: number) => {
    overlay.open(({ close, isOpen }) => (
      <GalleryDialog isOpen={isOpen} close={close} initialIndex={index} />
    ))
  }

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
        {Array.from({ length: TOTAL_IMAGES }).map((_, index) => {
          const isAboveFold = index < 9
          return (
            <div key={index} className="relative w-full h-[148px]">
              <div className="absolute w-full h-full">
                <Image
                  src={`/images/image-${index + 1}.webp`}
                  alt={`갤러리 썸네일 ${index + 1}`}
                  fill={true}
                  quality={75}
                  sizes="33vw"
                  className="object-cover cursor-pointer transition-opacity hover:opacity-90"
                  onClick={() => openGallery(index)}
                  priority={isAboveFold}
                  loading={isAboveFold ? 'eager' : 'lazy'}
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

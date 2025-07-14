'use client'

import Image from 'next/image'
import { overlay } from 'overlay-kit'
import { useState } from 'react'

import { AspectRatio } from 'src/components/ui/aspect-ratio'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'src/components/ui/carousel'
import { Dialog, DialogContent, DialogTitle } from 'src/components/ui/dialog'

const GallerySection = () => {
  const [_open, _setOpenn] = useState(false)

  return (
    <section className="py-4">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <CarouselItem
                key={index}
                onClick={() =>
                  overlay.open(({ close, isOpen }) => (
                    <Dialog open={isOpen} onOpenChange={close}>
                      <DialogTitle>sopdkposdk</DialogTitle>
                      <DialogContent className="bg-red-400">
                        <div>sopdkposdk</div>
                      </DialogContent>
                    </Dialog>
                  ))
                }
              >
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

        <CarouselPrevious />

        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default GallerySection

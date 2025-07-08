import Image from 'next/image'

import { AspectRatio } from 'src/components/ui/aspect-ratio'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'src/components/ui/carousel'

const GallerySection = () => {
  return (
    <section className="py-4">
      <Carousel className="w-full">
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

        <CarouselPrevious />

        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default GallerySection

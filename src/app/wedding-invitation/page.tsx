import CoupleInfoSection from './components/sections/couple-info'
import Dday from './components/sections/dday'
import GallerySection from './components/sections/gallery'
import GreetingSection from './components/sections/greeting'
import IntroSection from './components/sections/intro'
import LocationSection from './components/sections/location'
import ShareSection from './components/sections/share'
import WeddingDay from './components/sections/wedding-day'

const WeddingInvitation = () => {
  return (
    <div className="text-foreground font-suit bg-bg-body">
      <div className="max-w-md mx-auto bg-white">
        <IntroSection />

        <GreetingSection />

        <WeddingDay />

        <Dday />

        <CoupleInfoSection />

        <GallerySection />

        <LocationSection />

        <ShareSection />
      </div>
    </div>
  )
}

export default WeddingInvitation

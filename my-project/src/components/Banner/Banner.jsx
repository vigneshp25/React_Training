import BannerImage from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="w-full flex bg-cover">
      <img src={BannerImage} alt="BannerImage" className="w-full h-full" />
    </div>
  )
}

export default Banner
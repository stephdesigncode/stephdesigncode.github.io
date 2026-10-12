import './component.css';

const Footer = () => {
  return (
    <footer className="w-full">
        <div className="container">
            <div className="grid grid-flow-col grid-row-3 gap-4">
                <div className="row-span-3 bg-teal-200"></div>
                <div className="row-span-1">
                    <h3>Special Thanks To Our Vendors</h3>
                </div>
                <div className="row-span-2">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <a href="https://www.kitalou.com/" className="footer-links">Kitalou Gin</a>
                            <a href="https://www.cateringfromtheheart.com/" className="footer-links">Catering From The Heart</a>
                            <a href="https://www.facebook.com/BakeMyDay806/" className="footer-links">Bake My Day</a>
                        </div>
                        <div>
                            <a href="https://kirstenpraterphotography.com/" className="footer-links">Kirsten Photography</a>
                            <a href="https://platinumlubbock.com/" className="footer-links">Platinum DJ</a>
                            <a href="https://www.allthingsthatbloom.com/" className="footer-links">All Things That Bloom</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
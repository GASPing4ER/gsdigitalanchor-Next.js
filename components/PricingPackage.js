export default function PricingPackage() {
    return(
        <div className="pricing-package">
            <h1 className="pp-h1">get our <span className="pp-h1-bolded">packages & pricing</span> guide</h1>
            <form>
                <input type="text" id="fname" name="first-name" placeholder="First name"/>
                <input type="email" id="fname" name="email" placeholder="Email address"/>
                <button>SUBSCRIBE</button>
            </form> 
        </div>
    )
}
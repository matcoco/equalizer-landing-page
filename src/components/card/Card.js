import Button from "../_shared/Button";

const Card = () => {
    return (
        <div className="container-card">
            <div className="wrap-card">
                <div className="container-title-card">
                    <h1 className="title-card">Premium EQ</h1>
                </div>
                <div className="container-content-card">
                    <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
                </div>
                <div className="container-price-card">
                    <p className="price">$4</p>
                    <p className="per-month">/month</p>
                </div>
                <div>
                    <Button icon={'/assets/icon-apple.svg'} text='ios Download' cln_os={'apple'} />
                    <Button icon={'/assets/icon-android.svg'} text='Android Download' cln_os={'android'} />
                </div>
            </div>

        </div>
    )

}

export default Card;
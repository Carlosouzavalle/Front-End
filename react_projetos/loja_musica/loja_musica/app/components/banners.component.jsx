function Banners() {
    return (
        <section>
            <div className="banners_container">
                <div className="banners">
                    <div>
                        <img src="/imgs/img1.jpg" alt="img1" />
                    </div>
                    <div>
                        <img src="/imgs/img2.jpg" alt="img2" />
                    </div>
                    <div>
                        <img src="/imgs/img3.jpg" alt="img3" />
                    </div>
                </div>

                <div className="btn_prev">
                    <button>Prev</button>
                </div>

                <div className="btn_next">
                    <button>Next</button>
                </div>
            </div>
        </section>
    )
}

export default Banners;
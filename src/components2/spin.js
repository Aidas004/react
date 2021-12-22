const Spin = () => {
    const image = [
        "https://cdn4.iconfinder.com/data/icons/gambling-and-slot-machine/78/Gambling_and_slot_machine_icons-07-512.png",
        "https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/bell-512.png",
        "https://image.pngaaa.com/454/3597454-middle.png",
        "https://image.pngaaa.com/527/5632527-middle.png"
    ]

    return (
        <div>
            <div className="images">
                <img src={image[0]} alt=""/>
                <img src={image[0]} alt=""/>
                <img src={image[1]} alt=""/>
            </div>
            <button>Spin</button>
        </div>
    );
};

export default Spin;

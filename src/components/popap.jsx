import './popap.css'

const Popap = ({ isVisible }) => {
    return (
        <div className={ isVisible ? ('popap_wrapper') : ('popap_not_visible')}>
            <div className="popap">
                <p className="popap_name_discond">Информация о полученной скидке</p>
                <p className="popap_description_name">Вы выиграли скидку на такой - то товар Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus ducimus quibusdam. Voluptas sapiente asperiores aliquid optio sequi aperiam nemo facilis id tenetur repellat. Magnam ipsa totam inventore sed impedit?</p>
            </div>
        </div>
    )
}

export default Popap
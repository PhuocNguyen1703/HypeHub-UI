import classNames from 'classnames/bind';
import { useState } from 'react';

import { BsPlus } from 'react-icons/bs';
import Card from './Card/Card';
import CardForm from './CardForm/CardForm';
import styles from './Wallet.module.scss';

const cx = classNames.bind(styles);

function Wallet() {
    const [showCardFormModal, setShowCardFormModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const cards = [
        {
            id: 1,
            bankName: 'Nam a',
            cardNumber: '1234123412341234',
            cardHolder: 'NGUYEN QUOC PHUOC',
            cardMonth: '05',
            cardYear: '2036',
        },
        {
            id: 2,
            bankName: 'VCB',
            cardNumber: '1234123412341234',
            cardHolder: 'NGUYEN QUOC PHUOC',
            cardMonth: '06',
            cardYear: '2030',
        },
        {
            id: 3,
            bankName: 'VCB',
            cardNumber: '1234123412341234',
            cardHolder: 'NGUYEN QUOC PHUOC',
            cardMonth: '01',
            cardYear: '2025',
        },
        {
            id: 4,
            bankName: 'VCB',
            cardNumber: '1234123412341234',
            cardHolder: 'NGUYEN QUOC PHUOC',
            cardMonth: '02',
            cardYear: '2023',
        },
        {
            id: 5,
            // bankName: 'VCB',
            // cardNumber: '1234123412341234',
            // cardHolder: 'NGUYEN QUOC PHUOC',
            // cardMonth: '08',
            // cardYear: '2024',
        },
    ];

    const handleToggleCreateCardModal = () => {
        setShowCardFormModal((prevState) => !prevState);
    };

    const handleOnClickCard = (card) => {
        setSelectedCard(card);
        handleToggleCreateCardModal();
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Wallet</span>
                <button className={cx('add-card-btn')} onClick={handleToggleCreateCardModal}>
                    <BsPlus />
                    Add New Card
                </button>
            </header>

            <div className={cx('card-list')}>
                {cards.map((card, idx) => (
                    <div key={idx} className={cx('card')} onClick={() => handleOnClickCard(card)}>
                        <Card data={card} />
                    </div>
                ))}
            </div>

            {showCardFormModal && (
                <CardForm
                    show={showCardFormModal}
                    setShowCardFormModal={setShowCardFormModal}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                />
            )}
        </div>
    );
}

export default Wallet;

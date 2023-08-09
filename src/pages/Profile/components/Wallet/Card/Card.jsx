import classNames from 'classnames/bind';

import { images } from '~/assets/images';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ data }) {
    const transformCardNumber = () => {
        const letterSpace = ' ';
        const cardNumberArr = data.cardNumber.split('');
        cardNumberArr.forEach((val, idx) => {
            if (idx > 4 && idx < 14) {
                cardNumberArr[idx] = '*';
            }
        });
        cardNumberArr.splice(4, 0, letterSpace);
        cardNumberArr.splice(9, 0, letterSpace);
        cardNumberArr.splice(14, 0, letterSpace);

        return cardNumberArr;
    };

    return (
        <div className={cx('wrapper')}>
            <img className={cx('background-img')} src={images.bankCard} alt="background" />
            <img className={cx('chip-img')} src={images.chip} alt="chip" />
            <span className={cx('bank-name')}>{data?.bankName}</span>
            <div className={cx('card-number')}>
                {data?.cardNumber &&
                    transformCardNumber().map((val, idx) => (
                        <span key={idx} className={cx('letter', val === ' ' && 'letter-space')}>
                            {val}
                        </span>
                    ))}
            </div>
            <span className={cx('card-holder')}>
                Card Holder
                <span className={cx('card-holder-name')}>{data?.cardHolder}</span>
            </span>
            <span className={cx('expires')}>
                Expires
                <span className={cx('expires-date')}>
                    {data?.cardMonth ? data.cardMonth : 'MM'} / {data?.cardYear ? data.cardYear.substr(-2) : 'YY'}
                </span>
            </span>
        </div>
    );
}

export default Card;

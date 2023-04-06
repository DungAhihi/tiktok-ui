import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1680238800&x-signature=bwtSzMpXnrrub%2FP9xne%2B%2FOTmlJY%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>ALOLO</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>alolo</span>
            </div>
        </div>
    );
}

export default AccountItems;

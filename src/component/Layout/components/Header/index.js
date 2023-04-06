import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/component/Button';
import styles from './Header.module.scss';
import images from '~/assets/image';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItems from '~/component/AccountItems';
import Menu from '~/component/Popper/Menu';
import { InboxIcon, UploadIcon } from '~/component/Icons';
import { MessageIcon } from '~/component/Icons';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Languages',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'VietNamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('sreach')}>
                        <input placeholder="Tìm kiếm nội dung..." spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Up load </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="data:image/jpeg;base64,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"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                // fallBack="data:image/jpeg;base64,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"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

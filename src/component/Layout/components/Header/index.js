import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
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
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
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
                            <img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIgAbQMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA8EAACAQMDAQYDBgQEBwEAAAABAgMABBEFEiExBhMiQVFhcYGRFDKhscHRByNC8DNS4fEWJDRDYpLiFf/EABkBAAMBAQEAAAAAAAAAAAAAAAECBAMABf/EACERAAICAwACAwEBAAAAAAAAAAABAhEDEiEEQRMiMVFh/9oADAMBAAIRAxEAPwDW0KVQxXsLh5TBlfejwMAgiixRYpgB4z50YxxRYo8V1hDXr1x6UkjcaVj1oAChsdQQUef4UOBjApWKIjiu2OoNNvUmnAqt0/KmQcUrvDSsZOh3YAeOtHtH+YUxuPnQ3GhTDY93XoRQ7g4zgVIGz3peV24rLdjaETuPYfWlC3B/3p1gPL8qGDjr+FHdnaob+yj1onWGCNpZpAiKMszHGBUfVr3/APP0+a5bxFF8IPTPvXH01e/1TWJpr+6kcDpGThVB9B0rHLncTbFg36aftP2wuFkaLSh3aY4kZcsff0FZzStR7QahNMIL+dtimRxnqBUm+tIzKzu4UcYB/Gp3ZO4tdLjvLpknZJFCRERnxfD58VDLNN9s9KGDGuUX/ZjtBLOscGoHlsKkp9fQ1qzG1co7QIbKzhEBfvAAXCDIHPmRXSOx+ovqnZ2zu5iTKV2SZ/zKSD+VVeNmk1TI/KwRT2RO7o0XdVM6023FVqZG4kbZQ7upHNFtNHcXUczR5psmhk1PZqObhRbvam+c04sZOQ2T4SdoPJ4rm6ClZjf4h6httEs4z9/lufL+/wBa51pULy3UyqyjZF3zE+ijn9K0XbS+V9VliJIbJCg+gOP9axVndOmoT7G5dGj29NwPBH4mosj2bZ6OKOsUjW6Rp9x2p1dLSFwiY3SyEZ2IOv7D410Sy7Lx6fdwD7bPNCm1e5fbsOPYD+8Vnv4T9xDHdSk7JZyFG4+hJI+jL9K3V3LJn+TCJWx90ybR9cGppSd0Vxjwxfa3QI5L69EV00eFEqRIfCcc4I+I+hpf8LJu87KqrEFknkz8zn9aiXFtevqYt1sIrXvRtURMSAPX4AVK7DWrWF/eaeOI9ve88YIYjH021V477ZJ5kaWpsD7Gkn41IEUfcs2GJDAbs4xkHy+VNGM/0kMParVI85xEADzJpXh9/rSaFc2CiJZ3guWx4EJGQrNjHGTny49ial3bRwaVcXSSwvcpt2Qd4OcNz0PmKy7AY42/WiI44wfgax1/00TX8NLDqMDRqcRqSASNxGPan7ebvQzQopIVvFu4B2nrWR8uD19qnaTpbanO6B9iIuXcDJ59KEqStjRtukc27TR7+01xKzqI0yTt5HJzx69aobC1lTWIy9tNcRK4Z1gQM2M54HyNdl1nslpM9xieCSR/N++dT+BAqqm7FR2bNqVhdhUgQvJHNn7o56gipN1Z6Gj1H9Hmhu7m8u7aCSOJmVgksZjYNxnKnp1xVlqGoz2YD2j5THiV/FT+gWbx2rR36qk7lmYDnGcHGfbAHyqNdQMdMnYIWkyVUY96xfZGy4qJkO2NHuZ/59xIgUHptB6hR86kWEUNsS7wqZpMl23HqTk/oPlWIsLq8SeOz1SB4LhmIjkPCSr5HPQHyI45+Iq8ktry3GXWVVP9QJx9RV8NEjzZrI7s1vfJ9mJEeEMgDYfzwaaE0Wfuv9RWaa/vWh7prqZkbqDISKQl1cr0kPHqc09OjLhq++hONyuw9yM0kvanoso+BFZgXt1nPe89Puj9qXHdzHO5gfkB+lD7jfX+kIkkfcOM9MsMUbA5GE9wQBzUUTXjkZj4z0INLzdvxsH/AK5FLud8bH9rDqrD2C9a03Y0lYbolSDuXr86yYW5+7gA+wBrR9jO8SS8WRiQQmMjHr+9Z5pXBmuCNTRdSW6vOzP1PTNZvtbfw2Fi0LSKr3DCIA+jHB/DNaO9mMd3axryXkwR7YJP5Vxn+IGqHUO0NwqNmG3YxoR5n+o/Xj5VLjVsum9Udj7pYoxHjgADPrUSaPcgVDwDmqbsH2hj13QxbyuPt9moSVSeXXorj8j7j4VZ6fdbtWFpKQFcEIffrj6Zrqo5SsF7Yma3WSLC3MJ3xOfX0PsRkH2NNQa1bXenJd25zE5KMrdUcHDKfcGrjVZItPsJ7u4YJFBE0jt6ADJrz/2W7UyW+r30Nwdtpqc7SFSeI5C2QR+R+XpTxWyFlLVo6cWEkkn3QN2Rn0NEFOcjZj0P+1RLZ0lxvVmBHGBmpXcQt/2HPxSqYZEo9I8mP7cFhdvOYx8DRg+rIPiabNnC/H2dyAPT/WkGyiH3bMn3ytH5UJ8RJ7uVl/xm+WP2ovsrH700nzc1LKvwUAPTcC+MfhQ2xrg5UE/Aj9Kl2ZVqiF9iTvTKuN+MF/PHxq77MDurmfknKfrUCSa3j2iRwpJxjPJNWeilVv8AZ/U8JbHtxSyuhor7EDX9XNnd3U+P+ksp5l+IWuNsO9XcW3MeSfU10b+IrGEXDBtqyW8sTH03IV59uQflXK9PuXUGO4BR0+8HGCOnWtMa4Nmf4OW2sXWhalFe2UmyeI8A9HXzU+xrqdr2gt9Sis9YtcqpdHK55Rgwyp+HNcb1TEvjQg4zkVZ9i9SuLaaW17qWW2fxkRoW2uB7ev6CmkrRlCVSOt/xt1cW2iQaTDJiS+fMmDz3SYJ+rbR8M1wOYbZMA1o+1Gt32r6m9zqiyRTBFRI5FK7UHTj8c+pNM9n+yupdonea1iZbWJSZJ2GF4Gdq+pIroLWIJ9Z0LsZcNNaWBlPikQBifcVuk05mK8r4hkYU4x8a53ob90saxeERgbfbFdXt5xLDFKjHEqbgOvXyrGTfo2aK9NPPHjIJXdtAwR8c04LAAnxMwzwRjmp3QgcB/wDKOo/v2oTSrGwEiZOPMUlsWjKwxJFGrd7NK0p3APuZ1BH3VAxjH9mly6ZALqzdYwyg7QTISVwM+fPUeZwPSrARxRzSWhaQEP8AaPCCvPPIPnzgY9DUncLxkK+A5IUEcuQfxxj96dsBXTWbtJJJHIJwD/M8QZfYZ6dT0qZoqPHdKHLsQGUknqev0/KkoyNFHDYSRtcrJufCgbCeuRnGfxqXp8UcF66xKwG87yzZy2OfzoMaP6ZbtrALt5bY4y6FRn36VOg0LSO02l202q6fDJdLGIpJACkisvBG4YPXPGaa7VRMupBscVa2UsdtrtxaqyAXSi4Cg/dfow+eAfrQ76N3XEyqj/hl2WibeNN3e0k8jD6E1LOlWGmG3W0tYoYlkHhRQBWlkfCYqn1RC8PHXINDZv2DVL8RQ9rdPimUO8avjnxAGrLsUoGlSqiqWSY+Hbn+kY+VJ1de9hKjzWs7Z38+k3Rng8SkYePONw+PkfemXVQkkQJbf7BrF1a427JiAOmAeR+BFbjs1M0lkUfP8k7cHgYPI5+dZfVZbbUtat76yRgl1EuUYeIOpKkH6LWz2tDrEsaYxJCDg/8Aif8A6osD6icCMEuVzjOc9B8aRbyxvuKtuHHOcfgelJXaWAJwHyAp6E9cUa7olCBTkddoyKShSNqLzRLbz92HTf8Azd7ZUJnyHXPpR3HcW0BFrKI+8ysa7RsPHTb08+tOLbHc09rMZUc7trHAYY9utU+qXDfbIljVXxLuk7wYDYyB7Dr59cimXRXwm2UH82FDAlqYPEO5AwSc5z6/7VLtxJ9uUq0ZQDEi9WBxxyKRqcTPpyrYSJFOQMOx4f1FN6LG8drCxKxzPLuuARnceRgenkfhXerCuMru1p/mp59apI7z7N2qiaVhJ4gjsg6EqB+Bq/7WR+HefKsFJIyaqQxyyzbt48+etbYYqSaYPIm4uLR1tMOoIOQajXSjacjNQEu3iUY5zk7R14pB1WKbEYcd5t37fPBJGfwNZPFJDxzxkMSzJMp7s5A4PtWb1XbbCSWQjZ5e/t8athJb2sE7/cXvSzsckAnH0HSsx2jlNxCGiVn2kOMjrg54A6fE9KeEGwTyxXsldmue1GnQOBsZi+PVsj9q3t423XYyBnMTZH0rnXZdZJ+0unvCrxSLIwRJFxtwGJ3fQDit3c3Kza0DtdSsRDLjlDkcH96OZVIGN/R2WmEZWjDYDDlWooyTGo2RMB5SnkfPFIijjmG1gr+YOcfSiezw3LsV8snJrCw0MvJb2cU9zDKDHJhVUN4fTAI6Dmm59OS4ZxcNujdVCrJyvHXn1oUKZ8F/Rq7uRCIrQLgKqk7h/hqR0HpU60MFwu3ILROckdVPX8qFCjJcAn0Z7TR95YM68+HINctsYmvNTNuhw25sH0AyT+VHQqjxfYvlfiNzcIZ7VxE+CV645qHaJcLc3ly6F1YKsfH9AUAHB885P0oUK2JCHqE0x0m8aVVYuNqOuRsY8cjA8iPaqW4eHTYRGW727lxgZ4UUdCmikBt1ZY6AXtu1mlRSDxuoOPirE/kB8q3COv8AxFcgsAzQZH1oUKjzL7F+HuMK+t/+aF1FhXUeLH9Xxp9biSVQ0UoVT5HmhQrL0E//2Q=="
                                className={cx('user-avatar')}
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

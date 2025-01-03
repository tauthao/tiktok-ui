import classNames from 'classnames/bind';
import style from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7322875741526294530.jpeg?lk3s=a5d48078&nonce=78896&refresh_token=9f3d981e520a1f9d3df998107c848548&x-expires=1736038800&x-signature=0VIVWfKAO5C1LcpawPbFlEUK%2BSQ%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('userName')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AcountItem;

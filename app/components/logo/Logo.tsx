import Image from 'next/image';
import styles from './Logo.module.scss';

export default function Logo() {
    return (
        <div>
            <Image src="/music.svg" alt="Music Logo" width={102} height={102}  />
        </div>
    );
}
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import type {StaticImageData} from 'next/image';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useMemo,useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import testimonialBg from '../../images/testimonial.webp';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  useEffect(() => setParallaxEnabled(true), []);

  // Resolve image source for background
  const imageSrc = useMemo(() => (
    testimonialBg
      ? typeof testimonialBg === 'string'
        ? testimonialBg
        : (testimonialBg as StaticImageData).src
      : undefined
  ), []);
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="relative overflow-hidden">
        {/* Parallax background layer */}
        <div
          className={classNames(
            'absolute inset-0 bg-cover bg-center',
            parallaxEnabled && 'bg-fixed'
          )}
          style={imageSrc ? {backgroundImage: `url(${imageSrc})`} : undefined}
        />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col gap-y-8 px-4 py-16 md:py-24 lg:px-8">
          <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => {
              const {title, image} = item;
              return (
                <div className="pb-6" key={`${title}-${index}`}>  
                  <div
                    className={classNames(
                      'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl'
                    )}
                  >
                    <Image alt={title} className="h-full w-full object-cover" src={image} />
                    <ItemOverlay item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMobile) setMobile(true);
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity',
        {'opacity-0 hover:opacity-100': !mobile || showOverlay, 'opacity-100': showOverlay}
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank"
    >
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
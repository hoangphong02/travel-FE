import React, { memo } from 'react';

import { ReactComponent as ArrowDown } from '~/assets/images/iconography/Navigational/ArrowDown.svg';
import { ReactComponent as ArrowLeft } from '~/assets/images/iconography/Navigational/ArrowLeft.svg';
import { ReactComponent as ArrowNarrowLeft } from '~/assets/images/iconography/Navigational/ArrowNarrowLeft.svg';
import { ReactComponent as ArrowNarrowRight } from '~/assets/images/iconography/Navigational/ArrowNarrowRight.svg';
import { ReactComponent as ArrowRight } from '~/assets/images/iconography/Navigational/ArrowRight.svg';
import { ReactComponent as ArrowUp } from '~/assets/images/iconography/Navigational/ArrowUp.svg';
import { ReactComponent as BreadcrumbDot } from '~/assets/images/iconography/Navigational/BreadcrumbDot.svg';
import { ReactComponent as ChevronDown } from '~/assets/images/iconography/Navigational/ChevronDown.svg';
import { ReactComponent as ChevronLeft } from '~/assets/images/iconography/Navigational/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from '~/assets/images/iconography/Navigational/ChevronRight.svg';
import { ReactComponent as ChevronUp } from '~/assets/images/iconography/Navigational/ChevronUp.svg';
import { ReactComponent as Close } from '~/assets/images/iconography/Navigational/Close.svg';
import { ReactComponent as DotsHorizontal } from '~/assets/images/iconography/Navigational/DotsHorizontal.svg';
import { ReactComponent as DotsVertical } from '~/assets/images/iconography/Navigational/DotsVertical.svg';
import { ReactComponent as DownNav } from '~/assets/images/iconography/Navigational/DownNav.svg';
import { ReactComponent as Drag } from '~/assets/images/iconography/Navigational/Drag.svg';
import { ReactComponent as Menu } from '~/assets/images/iconography/Navigational/Menu.svg';
import { ReactComponent as Minus } from '~/assets/images/iconography/Navigational/Minus.svg';
import { ReactComponent as Plus } from '~/assets/images/iconography/Navigational/Plus.svg';
import { ReactComponent as PlusCircle } from '~/assets/images/iconography/Navigational/PlusCircle.svg';
import { ReactComponent as Selector } from '~/assets/images/iconography/Navigational/Selector.svg';
import { ReactComponent as SubArrow } from '~/assets/images/iconography/Navigational/SubArrow.svg';
import { ReactComponent as UpNav } from '~/assets/images/iconography/Navigational/UpNav.svg';
import { ReactComponent as ZoomIn } from '~/assets/images/iconography/Navigational/ZoomIn.svg';
import { ReactComponent as ZoomOut } from '~/assets/images/iconography/Navigational/ZoomOut.svg';

export const CSChevronDownNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ChevronDown
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSChevronDownNavigational.displayName = 'CSChevronDownNavigational';

export const CSArrowDownNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ArrowDown
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSArrowDownNavigational.displayName = 'CSArrowDownNavigational';

export const CSArrowLeftNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ArrowLeft
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSArrowLeftNavigational.displayName = 'CSArrowLeftNavigational';

export const CSArrowNarrowLeftNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ArrowNarrowLeft
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSArrowNarrowLeftNavigational.displayName = 'CSArrowNarrowLeftNavigational';

export const CSArrowNarrowRightNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ArrowNarrowRight
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSArrowNarrowRightNavigational.displayName = 'CSArrowNarrowRightNavigational';

export const CSArrowRightNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ArrowRight
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSArrowRightNavigational.displayName = 'CSArrowRightNavigational';

export const CSArrowUpNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ArrowUp
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSArrowUpNavigational.displayName = 'CSArrowUpNavigational';

export const CSBreadcrumbDotNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <BreadcrumbDot
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSBreadcrumbDotNavigational.displayName = 'CSBreadcrumbDotNavigational';

export const CSChevronLeftNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ChevronLeft
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSChevronLeftNavigational.displayName = 'CSChevronLeftNavigational';

export const CSChevronRightNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ChevronRight
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSChevronRightNavigational.displayName = 'CSChevronRightNavigational';

export const CSChevronUpNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ChevronUp
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSChevronUpNavigational.displayName = 'CSChevronUpNavigational';

export const CSCloseNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Close
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSCloseNavigational.displayName = 'CSCloseNavigational';

export const CSDotsHorizontalNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <DotsHorizontal
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSDotsHorizontalNavigational.displayName = 'CSDotsHorizontalNavigational';

export const CSDotsVerticalNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <DotsVertical
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSDotsVerticalNavigational.displayName = 'CSDotsVerticalNavigational';

export const CSDownNavNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <DownNav
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSDownNavNavigational.displayName = 'CSDownNavNavigational';

export const CSDragNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Drag
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSDragNavigational.displayName = 'CSDragNavigational';

export const CSMenuNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Menu
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSMenuNavigational.displayName = 'CSMenuNavigational';

export const CSMinusNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Minus
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSMinusNavigational.displayName = 'CSMinusNavigational';

export const CSPlusNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Plus
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSPlusNavigational.displayName = 'CSPlusNavigational';

export const CSPlusCircleNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <PlusCircle
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSPlusCircleNavigational.displayName = 'CSPlusCircleNavigational';

export const CSSelectorNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Selector
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSSelectorNavigational.displayName = 'CSSelectorNavigational';

export const CSSubArrowNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <SubArrow
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSSubArrowNavigational.displayName = 'CSSubArrowNavigational';

export const CSUpNavNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <UpNav
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSUpNavNavigational.displayName = 'CSUpNavNavigational';

export const CSZoomInNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ZoomIn
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSZoomInNavigational.displayName = 'CSZoomInNavigational';

export const CSZoomOutNavigational = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ZoomOut
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSZoomOutNavigational.displayName = 'CSZoomOutNavigational';

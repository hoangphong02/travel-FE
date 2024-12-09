import React, { memo } from 'react';

import { ReactComponent as Adjustments } from '~/assets/images/iconography/Solid/Adjustments.svg';
import { ReactComponent as Airplane } from '~/assets/images/iconography/Solid/Airplane.svg';
import { ReactComponent as Archive } from '~/assets/images/iconography/Solid/Archive.svg';
import { ReactComponent as Backspace } from '~/assets/images/iconography/Solid/Backspace.svg';
import { ReactComponent as BadgeCheck } from '~/assets/images/iconography/Solid/BadgeCheck.svg';
import { ReactComponent as Bell } from '~/assets/images/iconography/Solid/Bell.svg';
import { ReactComponent as Bill } from '~/assets/images/iconography/Solid/Bill.svg';
import { ReactComponent as Bookmark } from '~/assets/images/iconography/Solid/Bookmark.svg';
import { ReactComponent as BookOpen } from '~/assets/images/iconography/Solid/BookOpen.svg';
import { ReactComponent as Briefcase } from '~/assets/images/iconography/Solid/Briefcase.svg';
import { ReactComponent as Building } from '~/assets/images/iconography/Solid/Building.svg';
import { ReactComponent as Button } from '~/assets/images/iconography/Solid/Button.svg';
import { ReactComponent as Calendar } from '~/assets/images/iconography/Solid/Calendar.svg';
import { ReactComponent as Camera } from '~/assets/images/iconography/Solid/Camera.svg';
import { ReactComponent as Cards } from '~/assets/images/iconography/Solid/Cards.svg';
import { ReactComponent as Cash } from '~/assets/images/iconography/Solid/Cash.svg';
import { ReactComponent as ChartBar } from '~/assets/images/iconography/Solid/ChartBar.svg';
import { ReactComponent as Chat } from '~/assets/images/iconography/Solid/Chat.svg';
import { ReactComponent as Checkbox } from '~/assets/images/iconography/Solid/Checkbox.svg';
import { ReactComponent as Clock } from '~/assets/images/iconography/Solid/Clock.svg';
import { ReactComponent as CovidDocument } from '~/assets/images/iconography/Solid/CovidDocument.svg';
import { ReactComponent as Cube } from '~/assets/images/iconography/Solid/Cube.svg';
import { ReactComponent as DocSetting } from '~/assets/images/iconography/Solid/DocSetting.svg';
import { ReactComponent as DocumentAdd } from '~/assets/images/iconography/Solid/DocumentAdd.svg';
import { ReactComponent as DocumentText } from '~/assets/images/iconography/Solid/DocumentText.svg';
import { ReactComponent as Dollar } from '~/assets/images/iconography/Solid/Dollar.svg';
import { ReactComponent as Dropdown } from '~/assets/images/iconography/Solid/Dropdown.svg';
import { ReactComponent as Duplicate } from '~/assets/images/iconography/Solid/Duplicate.svg';
import { ReactComponent as Edit } from '~/assets/images/iconography/Solid/Edit.svg';
import { ReactComponent as EmojiHappy } from '~/assets/images/iconography/Solid/EmojiHappy.svg';
import { ReactComponent as Employee } from '~/assets/images/iconography/Solid/Employee.svg';
import { ReactComponent as Exclamation } from '~/assets/images/iconography/Solid/Exclamation.svg';
import { ReactComponent as ExternalLink } from '~/assets/images/iconography/Solid/ExternalLink.svg';
import { ReactComponent as Eye } from '~/assets/images/iconography/Solid/Eye.svg';
import { ReactComponent as EyeOff } from '~/assets/images/iconography/Solid/EyeOff.svg';
import { ReactComponent as Flag } from '~/assets/images/iconography/Solid/Flag.svg';
import { ReactComponent as Folder } from '~/assets/images/iconography/Solid/Folder.svg';
import { ReactComponent as FolderOpen } from '~/assets/images/iconography/Solid/FolderOpen.svg';
import { ReactComponent as Form } from '~/assets/images/iconography/Solid/Form.svg';
import { ReactComponent as Globe } from '~/assets/images/iconography/Solid/Globe.svg';
import { ReactComponent as GlobeAlt } from '~/assets/images/iconography/Solid/GlobeAlt.svg';
import { ReactComponent as Grid } from '~/assets/images/iconography/Solid/Grid.svg';
import { ReactComponent as Hand } from '~/assets/images/iconography/Solid/Hand.svg';
import { ReactComponent as Heart } from '~/assets/images/iconography/Solid/Heart.svg';
import { ReactComponent as Home } from '~/assets/images/iconography/Solid/Home.svg';
import { ReactComponent as IconPlay } from '~/assets/images/iconography/Solid/IconPlay.svg';
import { ReactComponent as Inbox } from '~/assets/images/iconography/Solid/Inbox.svg';
import { ReactComponent as Info } from '~/assets/images/iconography/Solid/Info.svg';
import { ReactComponent as InputForm } from '~/assets/images/iconography/Solid/InputForm.svg';
import { ReactComponent as Key } from '~/assets/images/iconography/Solid/Key.svg';
import { ReactComponent as LargeGrid } from '~/assets/images/iconography/Solid/LargeGrid.svg';
import { ReactComponent as Layers } from '~/assets/images/iconography/Solid/Layers.svg';
import { ReactComponent as LightingBolt } from '~/assets/images/iconography/Solid/LightingBolt.svg';
import { ReactComponent as LocationMarker } from '~/assets/images/iconography/Solid/LocationMarker.svg';
import { ReactComponent as LockClosed } from '~/assets/images/iconography/Solid/LockClosed.svg';
import { ReactComponent as LockOpen } from '~/assets/images/iconography/Solid/LockOpen.svg';
import { ReactComponent as Logout } from '~/assets/images/iconography/Solid/Logout.svg';
import { ReactComponent as Mail } from '~/assets/images/iconography/Solid/Mail.svg';
import { ReactComponent as MailOpen } from '~/assets/images/iconography/Solid/MailOpen.svg';
import { ReactComponent as Map } from '~/assets/images/iconography/Solid/Map.svg';
import { ReactComponent as Microphone } from '~/assets/images/iconography/Solid/Microphone.svg';
import { ReactComponent as MinusCircle } from '~/assets/images/iconography/Solid/MinusCircle.svg';
import { ReactComponent as Modal } from '~/assets/images/iconography/Solid/Modal.svg';
import { ReactComponent as Navigational } from '~/assets/images/iconography/Solid/Navigational.svg';
import { ReactComponent as Newspaper } from '~/assets/images/iconography/Solid/Newspaper.svg';
import { ReactComponent as Office } from '~/assets/images/iconography/Solid/Office.svg';
import { ReactComponent as PencilAlt } from '~/assets/images/iconography/Solid/PencilAlt.svg';
import { ReactComponent as Phone } from '~/assets/images/iconography/Solid/Phone.svg';
import { ReactComponent as Photograph } from '~/assets/images/iconography/Solid/Photograph.svg';
import { ReactComponent as PieChart } from '~/assets/images/iconography/Solid/PieChart.svg';
import { ReactComponent as Police } from '~/assets/images/iconography/Solid/Police.svg';
import { ReactComponent as Printer } from '~/assets/images/iconography/Solid/Printer.svg';
import { ReactComponent as Progress } from '~/assets/images/iconography/Solid/Progress.svg';
import { ReactComponent as Puzzle } from '~/assets/images/iconography/Solid/Puzzle.svg';
import { ReactComponent as Question } from '~/assets/images/iconography/Solid/Question.svg';
import { ReactComponent as Radio } from '~/assets/images/iconography/Solid/Radio.svg';
import { ReactComponent as Role } from '~/assets/images/iconography/Solid/Role.svg';
import { ReactComponent as RoleTag } from '~/assets/images/iconography/Solid/RoleTag.svg';
import { ReactComponent as Search } from '~/assets/images/iconography/Solid/Search.svg';
import { ReactComponent as Selector } from '~/assets/images/iconography/Solid/Selector.svg';
import { ReactComponent as Send } from '~/assets/images/iconography/Solid/Send.svg';
import { ReactComponent as Setting } from '~/assets/images/iconography/Solid/Setting.svg';
import { ReactComponent as Share } from '~/assets/images/iconography/Solid/Share.svg';
import { ReactComponent as ShareArrow } from '~/assets/images/iconography/Solid/ShareArrow.svg';
import { ReactComponent as ShieldCheck } from '~/assets/images/iconography/Solid/ShieldCheck.svg';
import { ReactComponent as ShoppingBag } from '~/assets/images/iconography/Solid/ShoppingBag.svg';
import { ReactComponent as Stepper } from '~/assets/images/iconography/Solid/Stepper.svg';
import { ReactComponent as Table } from '~/assets/images/iconography/Solid/Table.svg';
import { ReactComponent as Tag } from '~/assets/images/iconography/Solid/Tag.svg';
import { ReactComponent as Template } from '~/assets/images/iconography/Solid/Template.svg';
import { ReactComponent as Toggle } from '~/assets/images/iconography/Solid/Toggle.svg';
import { ReactComponent as Trash } from '~/assets/images/iconography/Solid/Trash.svg';
import { ReactComponent as Truck } from '~/assets/images/iconography/Solid/Truck.svg';
import { ReactComponent as Upload } from '~/assets/images/iconography/Solid/Upload.svg';
import { ReactComponent as User } from '~/assets/images/iconography/Solid/User.svg';
import { ReactComponent as UserAdd } from '~/assets/images/iconography/Solid/UserAdd.svg';
import { ReactComponent as UserCircle } from '~/assets/images/iconography/Solid/UserCircle.svg';
import { ReactComponent as UserGroup } from '~/assets/images/iconography/Solid/UserGroup.svg';
import { ReactComponent as UserRemove } from '~/assets/images/iconography/Solid/UserRemove.svg';
import { ReactComponent as Users } from '~/assets/images/iconography/Solid/Users.svg';
import { ReactComponent as Vaccine } from '~/assets/images/iconography/Solid/Vaccine.svg';

export const CSBackspaceSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Backspace
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSBackspaceSolid.displayName = 'CSBackspaceSolid';

export const CSAdjustmentsSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Adjustments
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSAdjustmentsSolid.displayName = 'CSAdjustmentsSolid';

export const CSAirplaneSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Airplane
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSAirplaneSolid.displayName = 'CSAirplaneSolid';

export const CSArchiveSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Archive
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSArchiveSolid.displayName = 'CSArchiveSolid';

export const CSBadgeCheckSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <BadgeCheck
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSBadgeCheckSolid.displayName = 'CSBadgeCheckSolid';

export const CSBellSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Bell
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSBellSolid.displayName = 'CSBellSolid';

export const CSBillSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Bill
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSBillSolid.displayName = 'CSBillSolid';

export const CSBookmarkSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Bookmark
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSBookmarkSolid.displayName = 'CSBookmarkSolid';

export const CSBookOpenSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <BookOpen
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSBookOpenSolid.displayName = 'CSBookOpenSolid';

export const CSBriefcaseSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Briefcase
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSBriefcaseSolid.displayName = 'CSBriefcaseSolid';

export const CSBuildingSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Building
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSBuildingSolid.displayName = 'CSBuildingSolid';

export const CSButtonSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Button
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSButtonSolid.displayName = 'CSButtonSolid';

export const CSCalendarSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Calendar
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSCalendarSolid.displayName = 'CSCalendarSolid';

export const CSCameraSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Camera
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSCameraSolid.displayName = 'CSCameraSolid';

export const CSCardsSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Cards
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSCardsSolid.displayName = 'CSCardsSolid';

export const CSCashSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Cash
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSCashSolid.displayName = 'CSCashSolid';

export const CSChartBarSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ChartBar
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSChartBarSolid.displayName = 'CSChartBarSolid';

export const CSChatSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Chat
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSChatSolid.displayName = 'CSChatSolid';

export const CSCheckboxSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Checkbox
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSCheckboxSolid.displayName = 'CSCheckboxSolid';

export const CSClockSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Clock
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSClockSolid.displayName = 'CSClockSolid';

export const CSCovidDocumentSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <CovidDocument
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSCovidDocumentSolid.displayName = 'CSCovidDocumentSolid';

export const CSCubeSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Cube
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSCubeSolid.displayName = 'CSCubeSolid';

export const CSDocSettingSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <DocSetting
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSDocSettingSolid.displayName = 'CSDocSettingSolid';

export const CSDocumentAddSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <DocumentAdd
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSDocumentAddSolid.displayName = 'CSDocumentAddSolid';

export const CSDocumentTextSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <DocumentText
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSDocumentTextSolid.displayName = 'CSDocumentTextSolid';

export const CSDollarSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Dollar
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSDollarSolid.displayName = 'CSDollarSolid';

export const CSDropdownSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Dropdown
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSDropdownSolid.displayName = 'CSDropdownSolid';

export const CSDuplicateSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Duplicate
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSDuplicateSolid.displayName = 'CSDuplicateSolid';

export const CSEditSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Edit
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSEditSolid.displayName = 'CSEditSolid';

export const CSEmojiHappySolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <EmojiHappy
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSEmojiHappySolid.displayName = 'CSEmojiHappySolid';

export const CSEmployeeSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Employee
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSEmployeeSolid.displayName = 'CSEmployeeSolid';

export const CSExclamationSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Exclamation
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSExclamationSolid.displayName = 'CSExclamationSolid';

export const CSExternalLinkSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ExternalLink
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSExternalLinkSolid.displayName = 'CSExternalLinkSolid';

export const CSEyeSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Eye
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSEyeSolid.displayName = 'CSEyeSolid';

export const CSEyeOffSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <EyeOff
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSEyeOffSolid.displayName = 'CSEyeOffSolid';

export const CSFlagSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Flag
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSFlagSolid.displayName = 'CSFlagSolid';

export const CSFolderSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Folder
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSFolderSolid.displayName = 'CSFolderSolid';

export const CSFolderOpenSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <FolderOpen
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSFolderOpenSolid.displayName = 'CSFolderOpenSolid';

export const CSFormSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Form
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSFormSolid.displayName = 'CSFormSolid';

export const CSGlobeSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Globe
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSGlobeSolid.displayName = 'CSGlobeSolid';

export const CSGlobeAltSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <GlobeAlt
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSGlobeAltSolid.displayName = 'CSGlobeAltSolid';

export const CSGridSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Grid
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSGridSolid.displayName = 'CSGridSolid';

export const CSHandSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Hand
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSHandSolid.displayName = 'CSHandSolid';

export const CSHeartSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Heart
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSHeartSolid.displayName = 'CSHeartSolid';

export const CSHomeSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Home
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSHomeSolid.displayName = 'CSHomeSolid';

export const CSIconPlaySolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <IconPlay
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSIconPlaySolid.displayName = 'CSIconPlaySolid';

export const CSInboxSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Inbox
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSInboxSolid.displayName = 'CSInboxSolid';

export const CSInfoSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Info
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSInfoSolid.displayName = 'CSInfoSolid';

export const CSInputFormSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <InputForm
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSInputFormSolid.displayName = 'CSInputFormSolid';

export const CSKeySolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Key
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSKeySolid.displayName = 'CSKeySolid';

export const CSLargeGridSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <LargeGrid
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSLargeGridSolid.displayName = 'CSLargeGridSolid';

export const CSLayersSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Layers
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSLayersSolid.displayName = 'CSLayersSolid';

export const CSLightingBoltSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <LightingBolt
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSLightingBoltSolid.displayName = 'CSLightingBoltSolid';

export const CSLocationMarkerSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <LocationMarker
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSLocationMarkerSolid.displayName = 'CSLocationMarkerSolid';

export const CSLockClosedSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <LockClosed
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSLockClosedSolid.displayName = 'CSLockClosedSolid';

export const CSLockOpenSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <LockOpen
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSLockOpenSolid.displayName = 'CSLockOpenSolid';

export const CSLogoutSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Logout
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSLogoutSolid.displayName = 'CSLogoutSolid';

export const CSMailSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Mail
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSMailSolid.displayName = 'CSMailSolid';

export const CSMailOpenSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <MailOpen
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSMailOpenSolid.displayName = 'CSMailOpenSolid';

export const CSMapSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Map
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSMapSolid.displayName = 'CSMapSolid';

export const CSMicrophoneSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Microphone
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSMicrophoneSolid.displayName = 'CSMicrophoneSolid';

export const CSMinusCircleSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <MinusCircle
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSMinusCircleSolid.displayName = 'CSMinusCircleSolid';

export const CSModalSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Modal
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSModalSolid.displayName = 'CSModalSolid';

export const CSNavigationalSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Navigational
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSNavigationalSolid.displayName = 'CSNavigationalSolid';

export const CSNewspaperSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Newspaper
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSNewspaperSolid.displayName = 'CSNewspaperSolid';

export const CSOfficeSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Office
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSOfficeSolid.displayName = 'CSOfficeSolid';

export const CSPencilAltSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <PencilAlt
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSPencilAltSolid.displayName = 'CSPencilAltSolid';

export const CSPhoneSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Phone
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSPhoneSolid.displayName = 'CSPhoneSolid';

export const CSPhotographSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Photograph
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSPhotographSolid.displayName = 'CSPhotographSolid';

export const CSPieChartSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <PieChart
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSPieChartSolid.displayName = 'CSPieChartSolid';

export const CSPoliceSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Police
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSPoliceSolid.displayName = 'CSPoliceSolid';

export const CSPrinterSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Printer
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSPrinterSolid.displayName = 'CSPrinterSolid';

export const CSProgressSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Progress
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSProgressSolid.displayName = 'CSProgressSolid';

export const CSPuzzleSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Puzzle
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSPuzzleSolid.displayName = 'CSPuzzleSolid';

export const CSQuestionSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Question
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSQuestionSolid.displayName = 'CSQuestionSolid';

export const CSRadioSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Radio
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSRadioSolid.displayName = 'CSRadioSolid';

export const CSRoleSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Role
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSRoleSolid.displayName = 'CSRoleSolid';

export const CSRoleTagSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <RoleTag
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSRoleTagSolid.displayName = 'CSRoleTagSolid';

export const CSSearchSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Search
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSSearchSolid.displayName = 'CSSearchSolid';

export const CSSelectorSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Selector
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSSelectorSolid.displayName = 'CSSelectorSolid';

export const CSSendSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Send
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSSendSolid.displayName = 'CSSendSolid';

export const CSSettingSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Setting
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSSettingSolid.displayName = 'CSSettingSolid';

export const CSShareSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Share
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSShareSolid.displayName = 'CSShareSolid';

export const CSShareArrowSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ShareArrow
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSShareArrowSolid.displayName = 'CSShareArrowSolid';

export const CSShieldCheckSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ShieldCheck
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSShieldCheckSolid.displayName = 'CSShieldCheckSolid';

export const CSShoppingBagSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <ShoppingBag
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSShoppingBagSolid.displayName = 'CSShoppingBagSolid';

export const CSStepperSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Stepper
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSStepperSolid.displayName = 'CSStepperSolid';

export const CSTableSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Table
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSTableSolid.displayName = 'CSTableSolid';

export const CSTagSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Tag
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSTagSolid.displayName = 'CSTagSolid';

export const CSTemplateSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Template
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSTemplateSolid.displayName = 'CSTemplateSolid';

export const CSToggleSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Toggle
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSToggleSolid.displayName = 'CSToggleSolid';

export const CSTrashSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Trash
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSTrashSolid.displayName = 'CSTrashSolid';

export const CSTruckSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Truck
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSTruckSolid.displayName = 'CSTruckSolid';

export const CSUploadSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Upload
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSUploadSolid.displayName = 'CSUploadSolid';

export const CSUserSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <User
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSUserSolid.displayName = 'CSUserSolid';

export const CSUserAddSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <UserAdd
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSUserAddSolid.displayName = 'CSUserAddSolid';

export const CSUserCircleSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <UserCircle
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSUserCircleSolid.displayName = 'CSUserCircleSolid';

export const CSUserGroupSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <UserGroup
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSUserGroupSolid.displayName = 'CSUserGroupSolid';

export const CSUserRemoveSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <UserRemove
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSUserRemoveSolid.displayName = 'CSUserRemoveSolid';

export const CSUsersSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Users
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSUsersSolid.displayName = 'CSUsersSolid';

export const CSVaccineSolid = memo(
  ({ className = '', style = {}, onClick = null }) => (
    <Vaccine
      className={className}
      style={style}
      onClick={onClick ? () => onClick() : null}
    />
  ),
);

CSVaccineSolid.displayName = 'CSVaccineSolid';

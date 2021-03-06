import React, {useContext} from 'react';
import {AnnounceGroup} from '../../shared/coinche';
import {I18nContext} from '../context/i18n';

type ComponentProps = {
  saidAnnounceGroups: AnnounceGroup[],
};
export const PlayerSaidAnnounceGroupsComponent: React.FunctionComponent<ComponentProps> = ({
  saidAnnounceGroups,
}) => {
  const i18n = useContext(I18nContext);

  if (!saidAnnounceGroups.length) {
    return null;
  }

  return (
    <div className="playerSaidAnnounceGroups">
      {saidAnnounceGroups.map(announceGroup => i18n.announce.group[announceGroup]).join(', ')}
    </div>
  );
};

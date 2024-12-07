import React from 'react';
import { Button } from '@/components/elements/button';
import Can from '@/components/elements/Can';
import { ServerContext } from '@/state/server';
import { useStoreState } from 'easy-peasy';
import { ip } from '@/lib/formatters';
import isEqual from 'react-fast-compare';

export default function SftpButton() {
    const username = useStoreState((state) => state.user.data!.username);
    const id = ServerContext.useStoreState((state) => state.server.data!.id);
    const sftp = ServerContext.useStoreState((state) => state.server.data!.sftpDetails, isEqual);

    return (
        <>
            <Can action={'file.sftp'}>
                <a href={`sftp://${username}.${id}@${ip(sftp.ip)}:${sftp.port}`}>
                    <Button.Text>SFTP</Button.Text>
                </a>
            </Can>
        </>
    );
}

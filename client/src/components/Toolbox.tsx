import React from 'react';
import { createUseStyles } from 'react-jss';

import {
  useDeleteToolByToolId,
  useUpdateJournalByJournalId,
} from 'utils/services';
import Tool from './Tool';

const useStyles = createUseStyles({
  toolbox: {
    borderRadius: '6px',
    // border: '1px solid black',
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
    padding: '10px',
    fontFamily: 'Open Sans',
    color: '#403B3B',
    overflowY: 'auto',
    maxHeight: '295px',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#C4C4C4',
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#9E9E9E',
    },
    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: '#737373',
    },
  },
});

const Toolbox = ({ journal, currentUser, refetch }: any) => {
  const classes = useStyles();

  const [updateJournal] = useUpdateJournalByJournalId();
  const [deleteTool] = useDeleteToolByToolId();
  const handleToolDelete = async (journal: any, toolId: any) => {
    console.log(toolId);
    await deleteTool({
      variables: {
        id: toolId,
      },
    });
    const updatedToolbox = journal.toolbox.filter((t: any) => {
      const tool = JSON.parse(t);
      return tool.id !== toolId;
    });
    const updatedJournal = await updateJournal({
      variables: {
        input: {
          id: journal.id,
          journalPatch: {
            toolbox: updatedToolbox,
          },
        },
      },
    });
    if (
      updatedJournal &&
      updatedJournal.data &&
      updatedJournal.data.updateJournalById
    ) {
      refetch();
    }
  };

  return (
    <div className={classes.toolbox}>
      {journal?.toolbox &&
        journal.toolbox.map((t: any) => {
          const tool = JSON.parse(t);

          return (
            <Tool
              currentUser={currentUser}
              journal={journal}
              tool={tool}
              handleToolDelete={handleToolDelete}
            />
          );
        })}
    </div>
  );
};
export default Toolbox;

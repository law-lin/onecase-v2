import { useRecentJournalsProfile } from 'utils/services';
import months from 'constants/months';

interface ProfileJournals {
  username: string;
}

const ProfileJournals = ({ username }: ProfileJournals) => {
  const recentJournals = useRecentJournalsProfile({
    variables: {
      username,
    },
  });
  const journals = recentJournals.data?.userByUsername?.journalsByUserId.nodes;

  return (
    <>
      {journals &&
        journals.length > 0 &&
        journals?.map((journal: any) => {
          let images = [];
          let content: any = [];
          journal.content.forEach((c: any) => {
            content.push(JSON.parse(c));
          });

          for (let current = 0; current < content.length - 1; current++) {
            if (images.length >= 2) {
              break;
            } else if (content[current].type === 'image') {
              if (content[current].content.length === 1)
                images.push({
                  name: content[current].content[0].name,
                  url: content[current].content[0].url,
                });
              else {
                for (let c = 0; c < content[current].content.length - 1; c++) {
                  if (images.length >= 2) {
                    break;
                  } else {
                    images.push({
                      name: content[current].content[c].name,
                      url: content[current].content[c].url,
                    });
                  }
                }
              }
            }
          }

          return (
            <div
              key={journal.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'flex-end',
                width: '90%',
                marginTop: '25px',
                backgroundColor: '#373737',
                color: 'white',
                borderRadius: '7px',
                padding: '10px',
              }}
            >
              <a
                href={`/j/${journal.id}`}
                style={{
                  paddingLeft: '5px',
                  paddingTop: '2px',
                  paddingBottom: '2px',
                  marginBottom: '10px',
                  fontWeight: 700,
                  fontFamily: 'Open Sans',
                  width: '100%',
                  backgroundColor: journal.color,
                  borderRadius: '6px',
                  color: '#FFFFFF',
                }}
              >
                {journal.title}
              </a>

              <div>
                {images.map((img) => {
                  return (
                    <img
                      key={img.url}
                      style={{
                        maxWidth: '75px',
                        marginRight: '20px',
                      }}
                      src={img.url}
                      alt={img.name}
                    ></img>
                  );
                })}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: '5px',
                  fontWeight: 400,
                  fontSize: '13px',
                }}
              >
                {months[new Date(journal.createdAt).getMonth()] +
                  ' ' +
                  new Date(journal.createdAt).getDate()}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProfileJournals;

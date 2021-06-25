import months from 'constants/months';

interface Content {
  type: 'text' | 'image';
  order?: number;
  content?: string | Array<Content>;
  name?: string;
  url?: string;
}

const Journal = ({ journal }: any) => {
  let date =
    months[new Date(journal?.createdAt).getMonth()] +
    ' ' +
    new Date(journal?.createdAt).getDate();
  let images = [];
  let content: Content[] = [];
  journal?.content?.forEach((c: any) => {
    content.push(JSON.parse(c));
  });

  for (let current = 0; current < content.length - 1; current++) {
    if (images.length >= 2) {
      break;
    } else if (content[current].type === 'image') {
      if (content[current].content?.length === 1)
        images.push({
          name: (content[current].content?.[0] as Content).name,
          url: (content[current].content?.[0] as Content).url,
        });
      else {
        for (
          let c = 0;
          c < (content[current]?.content?.length as number) - 1;
          c++
        ) {
          if (images.length >= 2) {
            break;
          } else {
            images.push({
              name: (content[current].content?.[c] as Content).name,
              url: (content[current].content?.[c] as Content).url,
            });
          }
        }
      }
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#373E49',
        borderRadius: '10px',
        marginBottom: '15px',
        color: 'white',
        paddingTop: '10px',
        paddingBottom: '7px',
        paddingLeft: '15px',
        paddingRight: '10px',
      }}
    >
      {/* {!props.showTopic && (
        <a
          href={`/p/${journal?.journalId}`}
          style={{ fontWeight: 700, marginBottom: '10px' }}
        >
          {journal?.description}
        </a>
      )} */}

      <a href={`/j/${journal?.id}`}>
        <h2
          style={{
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: 22,
            color: '#FFFFFF',
          }}
        >
          {journal?.title}
        </h2>
      </a>

      <div style={{ display: 'flex', maxWidth: '100%' }}>
        {images.map((image) => {
          return (
            <div style={{ marginRight: '25px' }}>
              <img
                style={{ maxWidth: '90px' }}
                src={image.url}
                alt={image.name}
              />
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          fontSize: '10px',
          fontWeight: 400,
          marginRight: '3px',
          paddingTop: '3px',
        }}
      >
        {date}
      </div>
    </div>
  );
};

export default Journal;

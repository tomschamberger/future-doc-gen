
import {styled} from 'styled-components';

const CoverPage = styled.div`
    page: coverpage;
    font-family: sans-serif;
    
    @page coverpage {
        size: A4;
        margin: 40mm 20mm;
        bleed: 0mm;

        @top-left {
            content: element(titleRunning);
            margin-top: 60px;
        }

        @top-right {
            content: "Württembergische Versicherung AG";
            font-family: sans-serif;
            text-align: center;
        }

        @bottom-right {
            content: "Seite " counter(page) " von " counter(pages);
        }
    }
    
    h1 {
        break-before: page;
    }
`;

const HeaderImage = styled.img`
    position: running(titleRunning);
    top: 0;
`

const Document = () => {
  return (
    <CoverPage>
      <HeaderImage src="/src/images/wsw_logo.png" width="300"/>
      <section>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non suscipit odio. Aenean ut ligula id mauris
          efficitur tincidunt vitae non leo. In convallis convallis leo, eget molestie metus imperdiet eu. Praesent
          pharetra, leo a laoreet mattis, ligula nisl commodo ante, non vestibulum nisi lacus eget magna. Maecenas
          scelerisque nibh ac felis egestas, egestas elementum risus pellentesque. Nulla iaculis ut leo a iaculis. Donec
          vel sodales dolor, vel fringilla elit. Vivamus aliquam diam eu maximus elementum. Integer eu urna at felis
          fermentum hendrerit.
        </p>
        <h1>Test</h1>
        <p>
          Nulla dignissim pellentesque magna ac maximus. Integer id tincidunt erat. Sed elementum posuere augue, quis
          pharetra mi vehicula in. Nullam rhoncus mi quis lectus gravida dignissim. Pellentesque a tortor ut leo pretium
          auctor non in massa. Nunc efficitur vestibulum mi, id mattis quam aliquet id. Ut semper tortor sit amet molestie
          mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec
          laoreet eleifend purus ut sagittis. Nunc consequat vel sapien at convallis.
        </p>
      </section>
    </CoverPage>
  );
};

export default Document
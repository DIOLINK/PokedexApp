import { useInfoPokemon } from '@/hook/useInfoPokemon';
import {
  OFFICIAL_ARTWORK,
  colorProgress,
  colorType,
  setRoute,
} from '@/utils/helpers';
import { IconArrowBack } from '@tabler/icons-react';
import {
  Button,
  Col,
  Container,
  ProgressBar,
  Row,
  Stack,
} from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import styles from './pokeInfo.module.scss';
export const Info = () => {
  const navigate = useNavigate();
  const { pokemon, speciePokemon, versionSelected, setVersionSelected } =
    useInfoPokemon();

  return (
    <Container>
      <Row className="justify-content-center mt-5 mb-5 align-items-center">
        <Col xs={10} sm={8}>
          <button
            className={styles.btnBack}
            title="Back"
            onClick={() => navigate(setRoute())}
          >
            <IconArrowBack />
          </button>
          <Row className="justify-content-center">
            <Col xs={10} md={8}>
              <LazyLoadImage
                className={styles.img}
                src={
                  pokemon?.sprites.other[OFFICIAL_ARTWORK]
                    .front_default as undefined
                }
                alt={pokemon?.name}
                effect="blur"
                width={'100%'}
              />
            </Col>

            <Col xs={10} className={styles.info}>
              {speciePokemon?.names
                .slice(8, 10)
                .map(({ name }, index) => <h2 key={name + index}>{name}</h2>)}
              <div className={styles.type}>
                {speciePokemon?.egg_groups.map(({ name }, index) => (
                  <span key={name + index} style={{ color: colorType(name) }}>
                    {name.replace(/[^a-zA-Z]/g, '')}
                  </span>
                ))}
              </div>
              {speciePokemon?.genera
                .filter(
                  ({ language: { name } }) => name === 'en' || name === 'ja'
                )
                .map(({ genus }, index) => <p key={genus + index}>{genus}</p>)}
              <h3 className={styles.titleGames}>Games</h3>
              <Stack
                gap={2}
                direction="horizontal"
                className="col-md-5 mx-auto justify-content-center"
              >
                {speciePokemon?.flavor_text_entries
                  .filter(({ language: { name } }) => name === 'en')
                  .slice(0, 5)
                  .map(({ version: { name } }, index) => (
                    <Button
                      variant="outline-light"
                      key={index}
                      onClick={() => setVersionSelected(name)}
                    >
                      <strong
                        className={styles.btnText}
                        style={{ color: `${colorType(name)}` }}
                      >
                        {name}
                      </strong>
                    </Button>
                  ))}
              </Stack>
              {speciePokemon?.flavor_text_entries
                .filter(
                  ({ language, version }) =>
                    language.name === 'en' && version.name === versionSelected
                )
                .map(({ flavor_text }, index) => (
                  <p key={index}>{flavor_text}</p>
                ))}
            </Col>
          </Row>
        </Col>
        <Col xs={10} md={4}>
          <Stack gap={2} className="col mx-auto">
            {pokemon?.stats.map(({ base_stat, stat: { name } }, index) => (
              <div key={name + index}>
                <h5 className={styles.titleStats}>{name}:</h5>
                <ProgressBar
                  now={base_stat}
                  label={`${base_stat}`}
                  striped={colorProgress[name].striped}
                  variant={colorProgress[name].variant}
                  className={styles.progressBar}
                  title={name}
                />
              </div>
            ))}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

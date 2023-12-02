import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/home.css"; 
import { useTranslation } from 'react-i18next';
import customerReviews from  "../assets/Data/Products";
import React from 'react';
const Blog = () => {
  const { t } = useTranslation();

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Row className="align-items-center">
            <Col md={12}>
            <div style={{ color: 'white' }}>
          <h1>{t('hello')}</h1>
           </div>             
               <div>
                <h2>{t('Les Oliviers')}</h2>
                <p>{t('Chaque article est fabriqué à la main à partir du tronc massif de l olivier.')}</p>
              </div>
            </Col>
            <Col md={12}>
              <img
                src="src/assets/images/i00.png"
                alt="Description de l'image"
                className="img-fluid rounded"
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <h2 className="mt-4">{t('Artisanat du bois')}</h2>
          <p className="text-muted">{t('Date de publication : 25 novembre 2023')}</p>
          <p>{t('L artisanat du bois en Tunisie est ancré dans une riche tradition qui remonte à des siècles. Les artisans du bois tunisiens sont réputés pour leur savoir-faire exceptionnel, leur maîtrise des techniques traditionnelles et leur capacité à créer des pièces uniques et magnifiquement travaillées.')}</p>
          <p>{t('Ces artisans talentueux transmettent souvent leurs compétences de génération en génération, préservant ainsi des méthodes artisanales authentiques. Ils utilisent une grande variété de bois, allant du cèdre au noyer en passant par l olivier, chacun apportant ses caractéristiques uniques à leurs créations.')}</p>
          <p>{t('Dans les régions comme Kairouan, Sfax ou encore Nabeul, les artisans du bois façonnent avec habileté des objets aussi divers que des meubles exquis, des ustensiles de cuisine, des sculptures décoratives, des coffrets à bijoux et des pièces architecturales. Leurs créations reflètent souvent la fusion entre l héritage culturel tunisien, les motifs traditionnels et une esthétique moderne.')}</p>
          <p>{t('Ces artisans font preuve d une grande minutie et d une attention particulière aux détails, souvent ornant leurs pièces de motifs ciselés ou de marqueterie, démontrant ainsi une expertise artistique remarquable.')}</p>
          <p>{t('L artisanat du bois en Tunisie dépasse la simple création d objets utilitaires ; c est un véritable héritage culturel qui témoigne du dévouement, du talent et de la passion des artisans pour leur métier, contribuant ainsi à la richesse et à la diversité du patrimoine artisanal tunisien.')}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
      <Col md={4} className="d-flex justify-content-center">
          <div className="text-center">
            <h4>{t('💕 happy Valentine’s Day')}</h4>
            <video controls className="img-fluid rounded" style={{ width: '160px', height: '160px', maxWidth: '300px' }}>
              <source src="src/assets/images/a.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <div className="text-center">
            <h4>{t('💕  restée vous Original')}</h4>
            <video controls className="img-fluid rounded"style={{ width: '160px', height: '160px', maxWidth: '300px' }}>
              <source src="src/assets/images/c.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <div className="text-center">
            <h4>{t('💕Des objets originaux')}</h4>
            <video controls className="img-fluid rounded" style={{ width: '160px', height: '160px', maxWidth: '300px' }}>
              <source src="src/assets/images/d.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>
          </Row>

    </Container>
    
  );
};

export default Blog;

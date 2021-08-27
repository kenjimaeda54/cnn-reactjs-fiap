import React, { useEffect, useState } from 'react';
import { FormattedDate } from '../../date/formattedDate';
import { FormattedHour } from '../../date/formattedHour';
import Logo from '../../assets/logo.svg';
import {
  Container,
  ContainerDate,
  Date,
  TextDate,
  ContainerIgm,
  BodyImg,
  ImgBody,
  ContainerSection,
  TextTop,
  TextFooter,
  Link,
} from './styles';

export function Body(): JSX.Element {
  const [hours, setHours] = useState('');

  useEffect(() => {
    setHours(FormattedHour());
    setInterval(function () {
      setHours(FormattedHour());
    }, 60000);
  }, [hours]);

  return (
    <Container>
      <ContainerDate>
        <Date>
          {FormattedDate()} as {hours}
        </Date>
        | <TextDate>Atualizado em {hours}</TextDate>
      </ContainerDate>
      <ContainerIgm>
        <BodyImg>
          <ImgBody src={Logo} />
        </BodyImg>
      </ContainerIgm>
      <ContainerSection>
        <TextTop>
          Po ser ser um doença nova, a <Link>Covid-19</Link> ainda nao foi
          compreendida totalmente pela comunidade media global.Os conhecimentos
          sobre a doença, estão em constatante atualização,incluindo os sintomas
          e os impactos para a saúde a curto e logo prazos.
        </TextTop>
        <TextFooter>
          A <Link> variante Delta da Covid-19 </Link>, originalmente conhecida
          como B.1617.2, existe desde o final do ano passado,mas nos últimos
          messes tornou-se rapidamente dominante em muitos países.Ainda nao esta
          claro o quanto essa cepa e mais transmissível.Estimivas variavam entre
          60% a 200% mais transmissível,dependo de quem apresenta a estimativa
        </TextFooter>
      </ContainerSection>
    </Container>
  );
}

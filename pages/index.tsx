import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useState, FC } from 'react'
import styles from '../styles/Home.module.css'

import {Stack, Nav, Navbar, Card, Button, Form, Container, Col, Row} from 'react-bootstrap';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from '../Inputs'

interface IService {
  image:string,
  header:string,
  text:Array<string>
}
interface ISection {
  id: string;
  name: string;
  component: JSX.Element;
  className: string;
}

const SectionHeader: FC = (props) => 
{
    return <Fragment>
        <h3 className='text-center p-1 pb-3'>{props.children}</h3>
    </Fragment>
}

const RoundImage: FC<{src:string, size:number, className?:string}> = (props) => 
{
    const className = props.className ? props.className : ''; 
    return <Fragment>
        <img width={props.size} height={props.size} src={props.src} 
                     className={"rounded-circle m-a " + className}/>
    </Fragment>
}

const services : Array<IService> = [
  {
      image:'./img/Frame 1.png',
      header:'Разработка проектов нового строительства, реконструкции, капитального и текущего ремонта',
      text:[
          '- на индивидуальные жилые дома, дачи и коттеджи',
          '- на малоэтажные многоквартирные жилые дома',
          '- на блокированные жилые дома и таунхаусы',
          '- на общественные объекты, магазины и офисы, рестораны и кафе',
          '- на авторемонтные предприятия, гаражи, мойки и мастерские',
          '- на производственные и складские объекты'
      ]
  },
  {
      image:'./img/Frame 2.png',
      header:'Консультирование по различным проектным и строительным вопросам',
      text:[]
  },
  {
      image:'./img/Frame 4.png',
      header:'Разработка проектов на перепланировку и/или переустройство квартир в многоквартирных домах (в т.ч. утепление лоджий, устройство антресолей, объединение и разделение помещений, выделение доли)',
      text:[]
  },
  {
      image:'./img/Frame 3.png',
      header:'Разработка проектов на перевод помещений из нежилого в жилой фонд и обратно',
      text:[]
  },
  {
      image:'./img/Frame 5.png',
      header:'Разработка проектов на внутренние и наружные инженерные сети (водопровод и канализация)',
      text:[]
  },
  {
      image:'./img/Frame 7.png',
      header:'Разработка проектов на благоустройство территорий и организацию парковок',
      text:[]
  },
  {
      image:'./img/Frame 6.png',
      header:'Разработка проектов планировки территории',
      text:[]
  },
  {
      image:'./img/Frame 8.png',
      header:'Адаптация готовых проектов из Интернета под конкретные условия',
      text:[]
  },
  {
      image:'./img/Frame 9.png',
      header:'Оцифровка чертежей с бумажного носителя',
      text:[]
  },
  {
      image:'./img/Frame 10.png',
      header:'Авторский надзор',
      text:[]
  },
  {
      image:'./img/Frame 11.png',
      header:'Разработка заключений по различным проектным вопросам',
      text:[]
  },
  {
      image:'./img/Frame 12.png',
      header:'Дизайн интерьеров',
      text:[]
  }
];

const dopServices : Array<IService> = [
  {
      image:'./img/gray.jpg',
      header:'Юридическое сопровождение объекта',
      text:[]
  },
  {
      image:'./img/gray.jpg',
      header:'Изготовление технических планов и межевания',
      text:[]
  },
  {
      image:'./img/gray.jpg',
      header:'Подбор и организация доставки строительных материалов и техники',
      text:[]
  },
  {
      image:'./img/gray.jpg',
      header:'Организация строительства и монтажа',
      text:[]
  }
];


interface ISocialnetwork{
  image:string,
  link:string
}

const socialnetworks = [
  {
      image:'./img/socialnetwork/vk.png',
      link:''
  },
  {
      image:'./img/socialnetwork/youtube.png',
      link:''
  }
];

const Menu : FC<{ sections:ISection[], socialnetworks:ISocialnetwork[] }> = (props) => {

  const socialnetworkElement = props.socialnetworks.map((s, i) => <a key={i} className={styles.header_navmenu_socialnetwork} href={s.link}>
      <RoundImage size={50} src={s.image} className='p-1' />
  </a>);
  
  const links = props.sections.map((s, i) => <Nav.Link key={i} href={"#"+s.id} className="nav-link">{s.name}</Nav.Link>);

  const notes = ['+7(961)128-37-18', 'persproekt@yandex.ru'].map((n, i) => <p key={i} className='color-white pl-2 mt-auto mb-auto'>{n}</p>);


  const rigth = socialnetworkElement.concat(notes);

  return <Fragment>
      <Navbar bg="dark" variant="dark" expand="xl" sticky="top" id="mainNav" >
          <Container fluid>
              <Navbar.Brand href="#">ПерсПроект</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
              <Nav style={{ maxHeight: '50vh' }}
                  className="me-auto my-2 my-lg-0"
                  navbarScroll >
                  {links}
              </Nav>
              {rigth}
              </Navbar.Collapse>
          </Container>
      </Navbar>
  </Fragment>
}

const Features: FC = () => {
  const features = [
      {
          text:'Индивидуальный подход к клиенту!',
          image:'./img/person.png'
      },
      {
          text:'Выполним проект вашего дома с нуля или по вашему эскизу!',
          image:'./img/images.png'
      },
      {
          text:'Скидка 20% на заказ проекта в зиму!',
          image:'./img/snow.png'
      },
      {
          text:'Подбор материалов для строительства и смета в подарок!',
          image:'./img/present.png'
      },
      {
          text:'В месяц проводится только три бесплатных консультации!',
          image:'./img/handsfree.png'
      },
      // {
      //     text:'Строительные и отделочные материалы по партнерским прайсам!',
      //     image:'./img/gray.jpg'
      // },
      {
          text:'При заказе комплексного проекта – скидка 10% на дизайн гостиной в проектируемом доме!',
          image:'./img/discount.png'
      }
  ];

  const featuresElements = features.map((s, i) => <Col key={i} className='p-3' md={3} sm={6}>
      <div className='w-100 d-flex justify-content-center'>
          <RoundImage src={s.image} size={60} className='color-white'/>
      </div>
      <p className='w-100 text-center'>{s.text}</p>
  </Col>);
  return <Fragment>
      <Container>
          <Row className='d-flex justify-content-center'>
              {featuresElements}
          </Row>
      </Container>
  </Fragment>
}

const Services : FC<{ services: Array<IService>, header:string }> = (props) =>{

  const servicesElements = props.services.map((s,i) => <Col key={i} className="mt-3" md={6} sm={12}>
      <div className='w-100 d-flex justify-content-center dotted-line-bottom pb-3'>
          <RoundImage src={s.image} size={100}/>
      </div>
      <h4 className='w-100 text-center'>{s.header}</h4>
      {s.text.map((t,i) => <p key={i} className='w-100 text-center'>{t}</p>)}
  </Col>);

  return <Fragment>
      <Container>
          <Row>
              <SectionHeader>{props.header}</SectionHeader>
          </Row>
          <Row>
              {servicesElements}
          </Row>
      </Container>
  </Fragment>
}

const Galery : FC = () =>{

  const images = [
      {
          header:'Заголовок',
          image:'./img/1.jpg',
          text:'Описание'
      },
      {
          header:'Заголовок',
          image:'./img/2.jpg',
          text:'Описание'
      },
      {
          header:'Заголовок',
          image:'./img/3.jpg',
          text:'Описание'
      },
      {
          header:'Заголовок',
          image:'./img/4.jpg',
          text:'Описание'
      },
      {
          header:'Заголовок',
          image:'./img/5.jpg',
          text:'Описание'
      }
  ]



  const imagesElements = images.map((i, n) => <Col key={n} className='p-2 color-black' lg={4} md={6} sm={10} >
      <Card className='p-2 color-black'>
          <Card.Img variant="top" src={i.image} />
          <Card.Body>
          <Card.Title>{i.header}</Card.Title>
              <Card.Text>{i.text}</Card.Text>
          </Card.Body>
      </Card>
  </Col>);
  return <Fragment>
      <Row className='p-2 d-flex justify-content-center w-100'>
          <SectionHeader>Дома и коттеджи на любой выбор</SectionHeader>
          {imagesElements}
      </Row>
  </Fragment>
}

const About: FC = () => {

  const about = [
      {
          image:'./img/gray.jpg',
          text:'Архитектурная мастерская индивидуального проектирования «ПерсПроект» - это группа высококвалифицированных специалистов широкого профиля в области проектирования, строительства и дизайна.'
      },
      {
          image:'./img/gray.jpg',
          text:'Мы предоставляем услуги по разработке проектов индивидуальных домов и коттеджей, а также других объектов (не подлежащих обязательной экспертизе) в любом регионе России. Прежде всего, мы учитываем ваши пожелания, но также смотрим на нормативные требования.'
      },
      {
          image:'./img/gray.jpg',
          text:'Оперативно реагируем на замечания проверяющих и контролирующих организаций, и устраняем их в кратчайшие сроки. В итоге предоставляем вам проект, который обязательно пройдет все проверки и согласования!'
      },
      {
          image:'./img/gray.jpg',
          text:'Мы работаем для вас! Уже более 7 лет решаем проектные задачи! Но мы не волшебники и беремся только за реальную работу.'
      }
  ];

  const aboutElements = about.map((a,i) => <p key={i} className='text-justify text-indent'>{a.text}</p>);

  return <Fragment>
      <Container>
          <Row>
              {aboutElements}
          </Row>
      </Container>
  </Fragment>
}

const AboutMe: FC = () => {

  const about = [
      {
          image:'./img/gray.jpg',
          text:'Я, Зудов Евгений Алексеевич, архитектор I категории – являюсь руководителем данной группы. Начинал свою деятельность как архитектор в ООО «Дизайн-Проект-Студия», а после в ООО «Планировка», г. Кострома под началом Бондарева Алексея Владимировича, хорошего специалиста своего дела. Сейчас веду работу совместно с ООО «Титан», г. Москва.'
      }
  ];

  const aboutElements = about.map((a,i) => <div key={i} className='align-items-center'>
      <div className='d-flex justify-content-center w-100 mb-3'>
          <RoundImage src={a.image} size={150}/>
      </div>
      <div className='text-justify text-indent'>{a.text}</div>
  </div>);

  return <Fragment>
      <Container>
          {aboutElements}
      </Container>
  </Fragment>
}

;

const Order : FC<{ services: Array<IService>, dopServices: Array<IService> }> = (props) => {

  const { services, dopServices } = props;

  const [selectServices, setSelectServices] = useState(new Array<IService>());

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const addServise = (service:IService|undefined) =>{
      if(service){
          const temp = [...selectServices, ...[service]];
          setSelectServices(temp);
      }
  }

  const deleteServise = (service:IService) =>{
      const temp = selectServices.filter(s => s !== service);
      setSelectServices(temp);
  }

  const serviceId = (i:number) => `order_services_${i}`;
  const servicesElement = services.map((s, i) =><div key={i} ><Form.Check {...register(serviceId(i))} id={serviceId(i)} type={'checkbox'} label={s.header} /> </div> );

  const dopServiceId = (i:number) => `order_dopservices_${i}`;
  const dopServicesElement = dopServices.map((s, i) => <div key={i} ><Form.Check id={dopServiceId(i)} type={'checkbox'} label={s.header} /></div>   );

  const [selectService, setSelectService] = useState<IService|undefined>();

  if(!selectService){
      setSelectService(services[0]);
  }

  const sendMail : SubmitHandler<Inputs> = async (data: Inputs) => {

    const servises = new Array<string>();

    services.forEach((s, i) =>{

        const value = data[serviceId(i)];
        if(value){
          servises.push(s.header);
        }
        data[serviceId(i)] = undefined;
    });

    data.selectServises = servises;

    try {
      await fetch("/api/sendmail", {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify(data)
      })

            //if sucess do whatever you like, i.e toast notification
      //setTimeout(() => reset(), 2000);
    } catch (error) {
        // toast error message. whatever you wish 
    }
  };

  return <Fragment>
      <Card>
          <Card.Header as="h5">Нужен проект!</Card.Header>
          <Card.Body>
          <Form onSubmit={handleSubmit(sendMail)}>
              <Stack>
                <Form.Group className="mb-3">
                    <Form.Label>Как к Вам обращаться?</Form.Label>
                    <Form.Control {...register("name", { required: true, minLength:3 })} id='name' type="text"  placeholder="Как к Вам обращаться?"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Адрес электронной почты для ответа</Form.Label>
                    <Form.Control {...register("email", { required: true })}  id='email' type="email"  placeholder="Адрес электронной почты для ответа"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Ваш номер телефона</Form.Label>
                    <Form.Control pattern='\d{5,11}' {...register("tel", { required: true })}  id='tel' type="tel"  placeholder="Ваш номер телефона"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Опишите Вашу задачу</Form.Label>
                    <Form.Control {...register("message")}  id='message' as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Выберите услуги</Form.Label>
                    <Col className="mb-3">{servicesElement}</Col>
                </Form.Group>
                <Form.Group>
                  <Button type='submit' variant="primary">Отправить</Button>
                </Form.Group>
              </Stack>
          </Form>  
          </Card.Body>
      </Card>
      
  </Fragment>
}


const Contact : FC<{ services: Array<IService>, dopServices: Array<IService> }> = (props) => {

  return <Fragment>
     <Container>
         <SectionHeader>Помогите нам разрешить ваш вопрос – оставьте заявку, и мы свяжемся с вами в самое ближайшее время</SectionHeader>
          <Order services={props.services} dopServices={props.dopServices} />
      </Container>
  </Fragment>
}

const Contacts : FC<{socialnetworks:ISocialnetwork[] }> = (props) => {

  const contacts = [
      {
          title:'Главный стрелочник – Евгений (обращаться по всем вопросам)',
          text:''
      },
      {
          title:'',
          text:'+7(961)128-37-18'
      },
      {
          title:'',
          text:'persproekt@yandex.ru'
      }
  ]

  const contactsElements = contacts.map((c,i) =><h4 key={i} className='text-center w-100'>{c.title}{c.text}</h4>);

  const socialnetworkElement = props.socialnetworks.map((s, i) => <a key={i} href={s.link} className='w-auto'>
  <RoundImage src={s.image} size={50}/>
</a>);

  return <Fragment>
      <Container>
          <SectionHeader>Контакты</SectionHeader>
          {contactsElements}
          <h3 className='text-center w-100  mt-5 mb-3'>Мы в социальных сетях</h3>
          <Row className='f-flex justify-content-center w-100'>
              {socialnetworkElement}
          </Row>
      </Container>
  </Fragment>
}

const Home: NextPage = () => {

  const logo = Array.from('ПерсПроект').map((l, i) => <div key={i} className='logo-letter'>{l}</div>);

  const sections : ISection[] = [
    {
        id:'Features',
        name:'Почему мы',
        component:<Features />,
        className:'dark-color'
    },
    {
        id:'Services',
        name:'Услуги',
        component:<Services services={services} header='Услуги'/>,
        className:''
    },
    // {
    //     id:'dopServices',
    //     name:'Услуги партнеров',
    //     component:<Services services={dopServices} header='Услуги от наших партнеров'/>,
    //     className:''
    // },
    {
        id:'Galery',
        name:'Галерея',
        component:<Galery/>,
        className:'dark-color red-line-top red-line-bottom'
    },
    {
        id:'About',
        name:'О нас',
        component:<Fragment><About /><AboutMe /></Fragment>,
        className:''
    },
    {
        id:'Contact',
        name:'Обратная связь',
        component:<Contact services={services} dopServices={dopServices}/>,
        className:''
    },
    {
        id:'Contacts',
        name:'Контакты',
        component:<Contacts socialnetworks={socialnetworks}/>,
        className:'dark-color red-line-top'
    }
]

const sectionsElements = sections.map((s,i) => <section key={i} className={"page-section " +s.className} id={s.id}>{s.component}</section>);

  return (
    <Fragment>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="anonymous"></script>
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
      <Menu sections={sections} socialnetworks={socialnetworks} />
      <header>
        <div className="header d-flex flex-column justify-content-around align-content-center red-line-top red-line-bottom">
          <h4 className='text-center'>Архитектурная мастерская индивидуального проектирования</h4>
          <div className='d-flex justify-content-center p-5'>{logo}</div>
          <h4 className='text-center'>Комплексное проектирование зданий и сооружений. От идеи до реализации объекта!</h4>
        </div>
      </header>
      <main>
        {sectionsElements}
      </main>
    </Fragment>
  )
}

export default Home

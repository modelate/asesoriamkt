function nextQuestion(current) {
    const currentQuestion = document.getElementById(`question${current}`);
    const nextQuestion = document.getElementById(`question${current + 1}`);
    const selectedValue = document.getElementById(current === 1 ? 'budget' : 'objective').value;
    
    if (!selectedValue) {
      alert('Por favor selecciona una opción');
      return;
    }

    currentQuestion.classList.remove('active');
    nextQuestion.classList.add('active');
  }

  function getStrategy() {
    const budget = document.getElementById('budget').value;
    const objective = document.getElementById('objective').value;
    const target = document.getElementById('target').value;

    if (!target) {
      alert('Por favor selecciona una opción');
      return;
    }

    const strategies = {
      bajo: {
        ventas: {
          b2b: "Email Marketing y LinkedIn:\n• Crear campañas de email marketing segmentadas\n• Optimizar perfil de LinkedIn\n• Contenido orgánico en LinkedIn\n• Marketing de contenidos en blog",
          b2c: "Social Media y SEO:\n• Estrategia en redes sociales orgánicas\n• Optimización SEO básica\n• Marketing de contenidos\n• Email marketing básico",
          ambos: "Marketing de Contenidos:\n• Blog optimizado para SEO\n• Newsletter mensual\n• Redes sociales orgánicas\n• Optimización de conversión"
        },
        marca: {
          b2b: "Content Marketing:\n• Articles en LinkedIn\n• Blog corporativo\n• Webinars gratuitos\n• Networking digital",
          b2c: "Social Media Orgánico:\n• Instagram/Facebook activo\n• Contenido viral\n• Colaboraciones\n• Storytelling",
          ambos: "Estrategia de Contenidos:\n• Presencia multiplataforma\n• User Generated Content\n• Email marketing\n• Blog"
        },
        trafico: {
          b2b: "SEO y Content Marketing:\n• Optimización SEO\n• Blog especializado\n• LinkedIn orgánico\n• Email marketing",
          b2c: "Social Media y SEO:\n• SEO local\n• Redes sociales orgánicas\n• Marketing de contenidos\n• Colaboraciones",
          ambos: "Estrategia de Tráfico Orgánico:\n• SEO técnico\n• Marketing de contenidos\n• Social Media\n• Email marketing"
        },
        leads: {
          b2b: "Lead Generation B2B:\n• LinkedIn orgánico\n• Email marketing\n• Actualizaciones de contenido\n• Webinars gratuitos",
          b2c: "Lead Generation B2C:\n• Landing pages\n• Social media orgánico\n• Email marketing\n• Marketing de contenido",
          ambos: "Estrategia de Leads:\n• Formularios optimizados\n• Marketing de contenido\n• Email nurturing\n• Prueba social"
        }
      },
      medio: {
        ventas: {
          b2b: "LinkedIn Ads + Email:\n• Campañas LinkedIn Ads\n• Email marketing automatizado\n• Landing pages optimizadas\n• Remarketing",
          b2c: "Facebook/Instagram Ads:\n• Campañas segmentadas\n• Catálogo de productos\n• Remarketing\n• Email marketing",
          ambos: "Mix Digital:\n• Google Ads\n• Social Media Ads\n• Email marketing\n• SEO"
        },
        marca: {
          b2b: "LinkedIn + Content:\n• LinkedIn Ads\n• Webinars premium\n• Ebooks\n• PR Digital",
          b2c: "Social Media Mix:\n• Instagram Ads\n• Influencer marketing\n• Contenido premium\n• PR Digital",
          ambos: "Branding Digital:\n• Social Media Ads\n• Content Marketing\n• PR Digital\n• Influencers"
        },
        trafico: {
          b2b: "Tráfico B2B:\n• Google Ads\n• LinkedIn Ads\n• SEO\n• Remarketing",
          b2c: "Tráfico B2C:\n• Facebook Ads\n• Google Ads\n• SEO\n• Instagram Ads",
          ambos: "Mix de Tráfico:\n• PPC\n• Social Ads\n• SEO\n• Display"
        },
        leads: {
          b2b: "B2B Lead Gen:\n• LinkedIn Ads\n• Google Ads\n• Remarketing\n• Marketing automation",
          b2c: "B2C Lead Gen:\n• Facebook Ads\n• Landing pages\n• Email automation\n• Remarketing",
          ambos: "Lead Generation Mix:\n• PPC\n• Social Ads\n• Email automation\n• Landing pages"
        }
      },
      alto: {
        ventas: {
          b2b: "Estrategia Integral B2B:\n• LinkedIn Ads premium\n• Google Ads\n• Marketing automation\n• Sales enablement",
          b2c: "Omnicanal B2C:\n• Facebook/Instagram Ads\n• Google Shopping\n• Email automation\n• Remarketing avanzado",
          ambos: "Full Digital Mix:\n• Paid Social\n• Google Ads\n• Automation\n• Analytics avanzado"
        },
        marca: {
          b2b: "Premium B2B:\n• LinkedIn Ads\n• Eventos virtuales\n• PR Digital\n• Account-based marketing",
          b2c: "Branding Premium:\n• Social Media Ads\n• Influencers tier 1\n• PR Digital\n• Contenido premium",
          ambos: "Estrategia 360:\n• Paid Media\n• Influencers\n• PR Digital\n• Eventos"
        },
        trafico: {
          b2b: "Tráfico Premium B2B:\n• Google Ads avanzado\n• LinkedIn Ads\n• Programmatic\n• Retargeting",
          b2c: "Tráfico Premium B2C:\n• Social Ads\n• Google Ads\n• Display\n• YouTube Ads",
          ambos: "Tráfico Omnicanal:\n• Search\n• Social\n• Display\n• Video"
        },
        leads: {
          b2b: "Lead Gen Premium B2B:\n• Account-based marketing\n• LinkedIn Ads\n• Marketing automation\n• CRM integration",
          b2c: "Lead Gen Premium B2C:\n• Social Ads\n• Marketing automation\n• Personalización\n• Analytics",
          ambos: "Lead Gen Avanzado:\n• Multicanal\n• Automation\n• Personalización\n• Analytics"
        }
      }
    };

    const strategyText = strategies[budget]?.[objective]?.[target];
    
    if (!strategyText) {
      alert('Por favor asegúrate de seleccionar todas las opciones');
      return;
    }

    document.getElementById('question3').classList.remove('active');
    document.getElementById('result').style.display = 'block';
    document.getElementById('strategy-content').innerHTML = strategyText.replace(/\n/g, '<br>');
  }

  function resetQuiz() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('question1').classList.add('active');
    document.getElementById('budget').value = '';
    document.getElementById('objective').value = '';
    document.getElementById('target').value = '';
  }
-- Insertar campañas para el master
INSERT INTO campaigns (master_id, name, description, status, is_public, created_at, settings)
VALUES
  -- Campañas Activas
  (
    '00000000-0000-0000-0000-000000000001',
    'El Despertar de los Dragones Ancestrales',
    'Una antigua profecía anuncia el regreso de los dragones primigenios. Los jugadores deberán descubrir la verdad detrás de su desaparición y enfrentar la decisión de ayudarlos a regresar o mantener el frágil equilibrio actual.',
    'active',
    true,
    NOW(),
    '{"initial_level": 1, "max_level": 20, "max_players": 6, "xp_initial": 0, "character_creation": "default_points", "initial_zenit": 100, "initial_fabula_points": 3}'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Crónicas del Reino de las Sombras',
    'En un reino donde la magia está prohibida, los jugadores son miembros de una sociedad secreta que lucha por preservar el conocimiento arcano. ¿Podrán mantener el equilibrio entre el poder y la responsabilidad?',
    'active',
    true,
    NOW(),
    '{"initial_level": 1, "max_level": 15, "max_players": 5, "xp_initial": 0, "character_creation": "default_points", "initial_zenit": 80, "initial_fabula_points": 2}'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'La Ciudad Flotante de Zephyr',
    'Una metrópolis mágica que flota entre las nubes, donde la tecnología y la magia se fusionan. Los jugadores son investigadores que deben resolver misterios mientras descubren los secretos de la ciudad.',
    'active',
    true,
    NOW(),
    '{"initial_level": 3, "max_level": 18, "max_players": 4, "xp_initial": 1000, "character_creation": "default_points", "initial_zenit": 150, "initial_fabula_points": 4}'
  ),

  -- Campañas en Progreso
  (
    '00000000-0000-0000-0000-000000000001',
    'El Legado de los Guardianes',
    'Los jugadores heredan una antigua fortaleza mágica y deben protegerla de fuerzas oscuras mientras descubren sus secretos y misterios.',
    'in_progress',
    false,
    NOW(),
    '{"initial_level": 5, "max_level": 20, "max_players": 4, "xp_initial": 2000, "character_creation": "default_points", "initial_zenit": 200, "initial_fabula_points": 5}'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Mares de la Eternidad',
    'Una aventura pirata en un mundo donde las islas flotan en el cielo y los monstruos marinos son criaturas legendarias. Los jugadores son corsarios que buscan un tesoro mítico.',
    'in_progress',
    true,
    NOW(),
    '{"initial_level": 4, "max_level": 16, "max_players": 5, "xp_initial": 1500, "character_creation": "default_points", "initial_zenit": 120, "initial_fabula_points": 3}'
  ),

  -- Campañas en Pausa
  (
    '00000000-0000-0000-0000-000000000001',
    'El Jardín de las Almas Perdidas',
    'Un misterioso jardín que aparece en diferentes lugares, donde las almas de los muertos encuentran paz. Los jugadores son guardianes que deben mantener el equilibrio entre el mundo de los vivos y los muertos.',
    'on_hold',
    false,
    NOW(),
    '{"initial_level": 2, "max_level": 12, "max_players": 3, "xp_initial": 500, "character_creation": "default_points", "initial_zenit": 50, "initial_fabula_points": 2}'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'Crónicas del Desierto de Cristal',
    'Un desierto donde la arena se ha convertido en cristal, y las antiguas ruinas esconden secretos de una civilización perdida. Los jugadores son arqueólogos aventureros.',
    'on_hold',
    true,
    NOW(),
    '{"initial_level": 3, "max_level": 15, "max_players": 4, "xp_initial": 1000, "character_creation": "default_points", "initial_zenit": 100, "initial_fabula_points": 3}'
  ),

  -- Campañas Completadas
  (
    '00000000-0000-0000-0000-000000000001',
    'La Torre de los Mil Espejos',
    'Una torre mágica donde cada piso refleja una realidad diferente. Los jugadores deben ascender mientras enfrentan sus propios reflejos y decisiones.',
    'completed',
    true,
    NOW(),
    '{"initial_level": 1, "max_level": 10, "max_players": 4, "xp_initial": 0, "character_creation": "default_points", "initial_zenit": 50, "initial_fabula_points": 2}'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'El Último Festival de las Luces',
    'Una ciudad celebra su festival anual, pero una conspiración amenaza con apagar las luces para siempre. Los jugadores son guardias que deben proteger la celebración.',
    'completed',
    false,
    NOW(),
    '{"initial_level": 2, "max_level": 8, "max_players": 3, "xp_initial": 500, "character_creation": "default_points", "initial_zenit": 75, "initial_fabula_points": 2}'
  ),

  -- Campañas Canceladas
  (
    '00000000-0000-0000-0000-000000000001',
    'El Laberinto de las Sombras',
    'Un laberinto que cambia constantemente, donde cada decisión tiene consecuencias. Los jugadores son prisioneros que buscan la salida.',
    'cancelled',
    false,
    NOW(),
    '{"initial_level": 1, "max_level": 12, "max_players": 4, "xp_initial": 0, "character_creation": "default_points", "initial_zenit": 50, "initial_fabula_points": 2}'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'La Ciudad de los Relojes',
    'Una ciudad donde el tiempo se ha detenido, y los jugadores son los únicos que pueden moverse libremente. Deben descubrir qué detuvo el tiempo.',
    'cancelled',
    true,
    NOW(),
    '{"initial_level": 3, "max_level": 15, "max_players": 5, "xp_initial": 1000, "character_creation": "default_points", "initial_zenit": 100, "initial_fabula_points": 3}'
  ),

  -- Campañas Archivadas
  (
    '00000000-0000-0000-0000-000000000001',
    'El Bosque de los Susurros',
    'Un bosque donde los árboles guardan los secretos del pasado. Los jugadores son druidas que deben proteger el bosque de una amenaza desconocida.',
    'archived',
    false,
    NOW(),
    '{"initial_level": 1, "max_level": 10, "max_players": 3, "xp_initial": 0, "character_creation": "default_points", "initial_zenit": 50, "initial_fabula_points": 2}'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'La Ciudad de las Máscaras',
    'Una ciudad donde todos usan máscaras mágicas que cambian su personalidad. Los jugadores deben descubrir quiénes son realmente las personas detrás de las máscaras.',
    'archived',
    true,
    NOW(),
    '{"initial_level": 2, "max_level": 12, "max_players": 4, "xp_initial": 500, "character_creation": "default_points", "initial_zenit": 75, "initial_fabula_points": 2}'
  ),

  -- Campañas Borrador
  (
    '00000000-0000-0000-0000-000000000001',
    'El Valle de los Vientos Eternos',
    'Un valle donde los vientos llevan mensajes del futuro. Los jugadores son mensajeros que deben interpretar las profecías y tomar decisiones que afectarán el destino del mundo.',
    'draft',
    false,
    NOW(),
    '{"initial_level": 1, "max_level": 15, "max_players": 4, "xp_initial": 0, "character_creation": "default_points", "initial_zenit": 50, "initial_fabula_points": 2}'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'La Isla de los Sueños Perdidos',
    'Una isla donde los sueños se materializan. Los jugadores son exploradores que deben navegar entre la realidad y los sueños para encontrar un tesoro legendario.',
    'draft',
    true,
    NOW(),
    '{"initial_level": 3, "max_level": 18, "max_players": 5, "xp_initial": 1000, "character_creation": "default_points", "initial_zenit": 100, "initial_fabula_points": 3}'
  ),
  (
    '00000000-0000-0000-0000-000000000001',
    'El Reino de las Sombras y Luces',
    'Un reino dividido entre la luz y la oscuridad, donde los jugadores deben mantener el equilibrio entre ambas fuerzas mientras descubren una conspiración que amenaza con destruir el mundo.',
    'draft',
    false,
    NOW(),
    '{"initial_level": 1, "max_level": 20, "max_players": 6, "xp_initial": 0, "character_creation": "default_points", "initial_zenit": 50, "initial_fabula_points": 2}'
  ); 
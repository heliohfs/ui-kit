import React from 'react';

export const LocaleContext = React.createContext({
  selectPromptMessage: 'Selecione',
  selectAllMessage: 'Selecionar todos',
  Wizard: {
    stepText: 'Step',
    backText: 'Voltar',
    nextText: 'AVANÇAR',
    finishText: 'FINALIZAR',
  },
  Table: {
    labelRowsPerPage: 'Linhas por página:',
    labelDisplayedRows: ({ from, to, count }) => `${from}-${to} de ${count}`,
    tooltipAdvancedFilter: 'Filtros Avançados',
    applyFiltersLabel: 'Aplicar Filtros',
    selectedFiltersLabel: 'Filtros Selecionados',
    emptyStateTitle: 'Nada por aqui',
    emptyStateMessage: 'Não existem dados para exibição.',
  },
  Picker: {
    todayLabel: 'Hoje',
    okLabel: 'Ok',
    cancelLabel: 'Cancelar',
    clearLabel: 'Limpar',
  },
  AppBar: {
    filterLabel: 'Filtro',
    closeSearch: 'Fechar Busca',
    openSearch: 'Abrir Busca',
    openMenu: 'Abrir Menu',
  },
});

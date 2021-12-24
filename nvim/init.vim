call plug#begin()

Plug 'neovim/nvim-lspconfig'
Plug 'williamboman/nvim-lsp-installer'
Plug 'hrsh7th/cmp-nvim-lsp' "completion
Plug 'hrsh7th/cmp-buffer'
Plug 'hrsh7th/cmp-path'
Plug 'hrsh7th/cmp-cmdline'
Plug 'hrsh7th/nvim-cmp'     "completion
Plug 'hrsh7th/cmp-vsnip'
Plug 'hrsh7th/vim-vsnip'
Plug 'rafamadriz/friendly-snippets'
Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'}

Plug 'itchyny/lightline.vim'
Plug 'joshdick/onedark.vim'
Plug 'andweeb/presence.nvim'

Plug 'jiangmiao/auto-pairs'
Plug 'tpope/vim-surround'
Plug 'easymotion/vim-easymotion'
Plug 'godlygeek/tabular'
Plug 'plasticboy/vim-markdown'
Plug 'bounceme/poppy.vim'
Plug 'itchyny/vim-cursorword'
Plug 'ryanoasis/vim-devicons'
Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
Plug 'preservim/nerdtree'
Plug 'tpope/vim-eunuch'
Plug 'airblade/vim-gitgutter'

"Hello World!"

call plug#end()

if (has("autocmd") && !has("gui_running"))
  augroup colorset
    autocmd!
    let s:white = { "gui": "#ABB2BF", "cterm": "145", "cterm16" : "7" }
    autocmd ColorScheme * call onedark#set_highlight("Normal", { "fg": s:white }) " `bg` will not be styled since there is no `bg` setting
  augroup END
endif

syntax on
colorscheme onedark

set virtualedit=all
set tabstop=4
set shiftwidth=4
set number relativenumber
set mouse=a
set cursorline
set cursorcolumn
set showbreak=↪'
set completeopt=menu,menuone,noselect


let mapleader = ","
nnoremap <leader>t :NERDTreeFocus<CR>
nnoremap <leader>k :NERDTreeToggle<CR>


lua require("lsp_config")
lua require("lspinstall_config")
lua require("lsp_cmp")


autocmd BufWritePre *.go lua vim.lsp.buf.formatting()
autocmd BufWritePre *.go lua goimports(1000)

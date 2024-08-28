import { useCallback, useEffect, useState, lazy, Suspense } from 'react'
import { Trash2Icon } from 'lucide-react'
import { api } from '../../../lib/api'
import Modal from '../Modal/Modal'
const CreateUser = lazy(() => import('../CreateUser/CreateUser'))
const EditProjects = lazy(() => import('../EditProjects/EditProjects'))
const ConfirmAction = lazy(() => import('../ConfirmAction/ConfirmAction'))

export default function ShowProjects() {
    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ContentComponent, setContentComponent] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); 

    const openModal = (Component, project = null, props = {}) => {
        setContentComponent(() => () => <Component project={project} {...props} />);
        setIsModalOpen(true);
    };

    const fetchUsers = useCallback(() => {
        api.get('/users')
            .then(response => {
                console.debug(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error.response?.data || error.message);
                setErrorMessage(`Error fetching users: ${error.response?.data || error.message}`);
            });
    }, []);

    const fetchProjects = useCallback(() => {
        api.get('/projects')
            .then(response => {
                console.debug(response.data);
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error.response?.data || error.message);
                setErrorMessage(`Error fetching projects: ${error.response?.data || error.message}`);
            });
    }, []);

    const deleteUser = (id) => {
        openModal(ConfirmAction, null, {
            onConfirm: () => handleDelete(id),
            onCancel: () => setIsModalOpen(false)
        });
    };

    const handleDelete = (id) => {
        api.delete(`/projects/${id}`)
            .then(response => {
                const ModalContent = () => <h1>{response.data}</h1>;
                openModal(ModalContent);
                fetchUsers();
            })
            .catch(error => {
                console.error('Error deleting:', error.response?.data || error.message);
                setIsModalOpen(false);
            });
    };

    const getUserNameById = (userId) => {
        const user = users.find(user => user.id === userId);
        return user ? user.name : 'Unknown User';
    };

    useEffect(() => {
        fetchUsers();
        fetchProjects();
    }, [fetchUsers, fetchProjects]);

    const filteredProjects = projects.filter((project) =>
        getUserNameById(project.userId).toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        
        <div>
            
            <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Lista de Projetos</h1>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Pesquisar por usuário..."
                        className="rounded-md border border-gray-300 px-4 py-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button 
                        onClick={() => openModal(CreateUser)} 
                        className="rounded-md bg-purple-600 px-4 py-2 font-medium text-gray-50 transition-colors hover:bg-purple-600/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        Criar Projeto
                    </button>
                </div>
            </div>

            <main className="overflow-auto rounded-lg border border-slate-300">
                <table className="w-full table-auto">
                    <thead className="bg-purple-600/40">
                        <tr>
                            <th className="px-4 py-3 text-left font-bold">User</th>
                            <th className="px-4 py-3 text-left font-bold">Projetos</th>
                            <th className="px-4 py-3 text-left font-bold">Status</th>
                            <th className="px-4 py-3 text-right font-bold">Ações</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300">
                        {filteredProjects.map((project) => (
                            <Suspense key={project.id} fallback={<tr><td colSpan="4">Loading...</td></tr>}>
                                <tr>
                                    <td className="px-4 py-3 font-medium text-foreground capitalize">
                                        {getUserNameById(project.userId)}
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">{project.name}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{project.status}</td>
                                    <td className="px-4 py-3 text-right font-medium">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="rounded-md p-2 text-[#4f3864] hover:text-[#757575] duration-500" onClick={() => openModal(EditProjects, project)}>Editar</button>
                                            <button className="rounded-md" 
                                            onClick={() => deleteUser(project.id)}
                                            aria-label={`Excluir usuário ${project.name}`}
                                            >
                                                <Trash2Icon className="text-[#4f3864] hover:text-red-600 duration-500"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </Suspense>
                        ))}
                    </tbody>
                </table>
                {errorMessage && (
                    <h3 className="mt-4 text-red-600">
                        {errorMessage}
                    </h3>
                )}
            </main>

            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                Component={ContentComponent}
            />
        </div>
    )
}
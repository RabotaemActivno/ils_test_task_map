import axios from 'axios';

// Функция для отправки запроса к API OSRM и получения данных маршрута
export async function fetchRoute(startPoint, middlePoint, endPoint, profile = 'driving') {
  const url = `https://router.project-osrm.org/route/v1/${profile}/${startPoint[1]},${startPoint[0]};${middlePoint[1]},${middlePoint[0]};${endPoint[1]},${endPoint[0]}?overview=false`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при запросе к API OSRM');
  }
}